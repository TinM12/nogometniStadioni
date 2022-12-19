const db = require('../../db');

exports.notFound = (req, res) => {
    let response = {status: "Not Found", message: "Ne postoji trazeni resurs", response: null};
    res.status(404).json(response);
}