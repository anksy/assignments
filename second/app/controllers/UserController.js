'use strict';
const path = require("path"),
      fs   = require("fs"),
      __data_source = path.resolve("./app/__mocks/data.txt");
/**
 * 
 */
module.exports = class UserController {
    constructor(){
        this.get = this.get.bind(this);
        //675801421744
        //icic0006758
    }

	/**
	 * authenticate user against passed credentials
	 */
    get(req, res) {
        this.__readData(__data_source)
            .then(lists => res.json({ type: "success", data: this.__formatter(lists)}))
            .catch(err => res.status(412).json({type:"error", message:"No Data Found"}));
    }

    /** Private Methods */

    __readData(file){
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf-8', (err, lists) => {
                if (lists) resolve(lists.split("\n"));
                if (err) reject(err);
            });
        });
    }

    __formatter(lists){
        let o = [];
        /**
         * iterate to convert into formatted object
         */
        lists.forEach(row => {
            let parts = row.split(",");
            o.push({
                name: (parts.length && parts[0]) ? parts[0].trim() : "N/A",
                dob: (parts.length && parts[1]) ? parts[1].trim() : "N/A",
                email: (parts.length && parts[2]) ? parts[2].trim() : "N/A",
                github: (parts.length && parts[3]) ? parts[3].trim() : "N/A",
                twitter: (parts.length && parts[4]) ? parts[4].trim() : "N/A",
                city: (parts.length && parts[5]) ? parts[5].trim() : "N/A",
                postal: (parts.length && parts[6]) ? parts[6].trim() : "N/A"
            });
        });

        return o;
    }

}