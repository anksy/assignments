'use strict';
const path = require("path"),
      fs   = require("fs"),
      __data_source = path.resolve("./app/__mocks/data.txt");
/**
 * 
 */
module.exports = class UserController {
    constructor(){
        this.list = this.list.bind(this);
        this.get = this.get.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
    }

	/**
	 * get list of users
	 */
    list(req, res) {
        this.__readData(__data_source)
            .then(lists => {
            
                
                res.json({ type: "success", data: this.__formatter(lists) });
            })
            .catch(err => res.status(412).json({type:"error", data:[], message:"No Data Found"}));
    }

    /**
	 * get details of user
	 */
    get(req, res) {
        let { id } = req.params;
        if (!parseInt(id)) return res.status(412).json({ type: "error", message: "User Id not provided" });

        this.__readData(__data_source)
            .then(lists => {
                if (+id <= lists.length) {
                    return res.json({ type: "success", data: this.__single(id - 1, lists[id - 1].split(",")) });
                }else{
                    return res.status(412).json({ type: "error", message: "This is not a valid ID." });
                }
            })
            .catch(err => res.status(412).json({ type: "error", message: "No Data Found" }));
    }

    /**
     * delete user based on provided identity
     */
    delete(req, res){
        let {id} = req.params;
        
        if (!parseInt(id)) return res.status(412).json({ type: "error", message: "User Id not provided" });

        fs.readFile(__data_source, 'utf8', (err, list) => {

            if (err) return res.status(412).json({ type: "error", message: "Data can't be removed." });

            let rows = list.split('\n');
            if (+id <= rows.length){
                rows.splice(+id-1, 1);
                let SplicedData = rows.join('\n');
                fs.writeFileSync(__data_source, SplicedData);
                res.json({ type: "success", message: "User has been removed." });
            }else{
                res.status(412).json({ type: "error", message: "This is not a valid ID." });
            }
            
        });
    }

    add(req, res){
        let userData = req.body;
        let userStr = [
            userData.name || "N/A",
            userData.dob || "N/A",
            userData.email || "N/A",
            userData.github || "N/A",
            userData.twitter || "N/A",
            userData.city || "N/A",
            userData.postal || "N/A"
        ].join(",");
        
        this.__readData(__data_source)
        .then(users => {
            users.push(userStr);
            users = users.join('\n');
            this.__writeData(__data_source, users);
            res.json({type:"success", message: "User has been added successfully."});
        })
        .catch(error => res.status(412).json({type : "error", message :"User can't be added at this moment."}))
    }

    edit(req, res) {
        let { id } = req.params;
        if (!parseInt(id)) return res.status(412).json({ type: "error", message: "User Id not provided" });

        let userData = req.body;
        let userStr = [
            userData.name || "N/A",
            userData.dob || "N/A",
            userData.email || "N/A",
            userData.github || "N/A",
            userData.twitter || "N/A",
            userData.city || "N/A",
            userData.postal || "N/A"
        ].join(",");

        this.__readData(__data_source)
            .then(users => {
                users[id - 1] = userStr;
                users = users.join('\n');
                this.__writeData(__data_source, users);
                res.json({ type: "success", message: "User details have been updated successfully." });
            })
            .catch(error => res.status(412).json({ type: "error", message: "User can't be added at this moment." }))
    }

    /** Private Methods */

    __readData(file){
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf-8', (err, lists) => {
                
                if (lists) {
                    resolve(lists.split("\n"))
                }else{
                    reject(err);
                }

            });
        });
    }

    __writeData(file, data){
        fs.writeFileSync(file, data);
    }

    __formatter(lists){
        let o = [];
        /**
         * iterate to convert into formatted object
         */
        lists.forEach((row, index) => {
            let parts = row.split(",");
            o.push(this.__single(index, parts));
        });

        return o;
    }

    __single(index, parts){
        return {
            id: index + 1,
            name: (parts.length && parts[0]) ? parts[0].trim() : "N/A",
            dob: (parts.length && parts[1]) ? parts[1].trim() : "N/A",
            email: (parts.length && parts[2]) ? parts[2].trim() : "N/A",
            github: (parts.length && parts[3]) ? parts[3].trim() : "N/A",
            twitter: (parts.length && parts[4]) ? parts[4].trim() : "N/A",
            city: (parts.length && parts[5]) ? parts[5].trim() : "N/A",
            postal: (parts.length && parts[6]) ? parts[6].trim() : "N/A"
        };
    }

}