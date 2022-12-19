const db = require('../../db');

exports.notImplemented = (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
}