const db = require('../db');
const { validationResult } = require('express-validator');

exports.listaKlubova = async(req, res) => {
    const klubovi = await db.query(`SELECT * FROM klub`);

    let response = {status: "", message: "", response: ""};

    if(klubovi.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćeni klubovi";
    response.response = klubovi.rows;
    res.status(200).json(response);
};

exports.getKlub = async(req, res) => {
    const id = req.params.id;

    let response = {status: "", message: "", response: ""};
    
    if(isNaN(id)) {
        response.status = "Bad Request";
        response.message = "Id mora biti broj";
        response.response = null;
        return res.status(400).json(response);
    }

    const klub = await db.query(`SELECT * FROM klub WHERE sifklub=${id}`);

    if(klub.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!klub.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji klub sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćen klub";
    response.response = klub.rows[0];
    res.status(200).json(response);
};

exports.postKlub = async(req, res) => {
    let response = {status: "", message: "", response: ""};

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        response.status = "Invalid Value";
        response.message = "Neispravno zadani podaci";
        response.response = errors;
        return res.status(400).json(response);
    }

    const { imeKluba } = req.body;

    //Provjeri postoji li vec klub sa tim imenom
    const query1 = `SELECT * FROM klub WHERE imekluba=$1`;
    const postojiKlub = await db.query(query1, [imeKluba]);

    if(postojiKlub.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(postojiKlub.rowCount) {
        response.status = "Already Exists";
        response.message = "Već postoji klub sa tim nazivom";
        response.response = null;
        return res.status(403).json(response);
    }

    //Dodavanje kluba
    const query2 = `INSERT INTO klub (imeKluba) VALUES($1)`;
    const klub = await db.query(query2, [imeKluba]);
    if(klub.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Uspješno dodan klub";
    response.response = undefined;
    res.status(200).json(response);
};