const Router = require('../Router');

const API = (app) => {
    app.use('/', Router);
};

module.exports = API;