const db = require('../../db');

exports.listaGradova = async(req, res) => {
    const gradovi = await db.query(`SELECT * FROM grad`);

    let response = {status: "", message: "", response: ""};

    if(gradovi.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćeni gradovi";
    response.response = gradovi.rows;
    res.status(200).json(response);
};

exports.getGrad = async (req, res) => {
    const id = req.params.id;

    let response = {status: "", message: "", response: ""};
    
    if(isNaN(id) || id < 0 || id % 1 != 0) {
        response.status = "Bad Request";
        response.message = "Id grada mora biti prirodni broj";
        response.response = null;
        return res.status(400).json(response);
    }

    const grad = await db.query(`SELECT * FROM grad WHERE sifgrad=${id}`);

    if(grad.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!grad.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji grad sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćen grad";
    response.response = grad.rows[0];
    res.status(200).json(response);
};