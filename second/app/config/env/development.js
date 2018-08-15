'use strict';
const DS = "/",
    PORT = 4000,
    base_url = "http://localhost:" + PORT + DS;

module.exports = {
    API: { site: '/api/' },
    base_url: base_url,
    server: { PORT: PORT }
};