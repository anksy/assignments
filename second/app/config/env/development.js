'use strict';
const DS = "/",
    PORT = 4000,
    base_url = "http://localhost:" + PORT + DS;

module.exports = {
    API: {
        site: '/api/'
    },
    base_url: base_url,
    debug_mongo: false,
    DS: DS,
    image_destination: 'uploads',
    image_dstn_w_slash: "./uploads/",
    listing: {
        limit: 10
    },
    secret: new Buffer("w5f1w153@#f123asf@#%f3g2&^%JH#2fc#@%@32@23%@#@@@@^%f2f23f#@@#fg").toString('base64'),
    /*for sending emails*/
    server: {
        PORT: PORT
    }
};