const db = require('../../db');

exports.listaArhitekta = async(req, res) => {
    const arhitekti = await db.query(`SELECT * FROM arhitekt`);

    let response = {status: "", message: "", response: ""};

    if(arhitekti.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćeni arhitekti";
    response.response = arhitekti.rows;
    res.status(200).json(response);
};

exports.getArhitekt = async(req, res) => {
    const id = req.params.id;

    let response = {status: "", message: "", response: ""};
    
    if(isNaN(id) || id < 0 || id % 1 != 0) {
        response.status = "Bad Request";
        response.message = "Id arhitekta mora biti prirodni broj";
        response.response = null;
        return res.status(400).json(response);
    }

    const arhitekt = await db.query(`SELECT * FROM arhitekt WHERE idarhitekt=${id}`);

    if(arhitekt.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!arhitekt.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji arhitekt sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćen arhitekt";
    response.response = arhitekt.rows[0];
    res.status(200).json(response);
};