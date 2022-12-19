const db = require('../../db');
const { validationResult } = require('express-validator');

exports.listaStadiona = async (req, res) => {
    const stadioni = await db.query(`SELECT sifStadion, naziv, nazivdrzava, nazivgrad, godinaotvorenja, kapacitet, rekordnaprisutnost, imekluba, 
    cijenaizgradnje, brojloza, (SELECT json_agg(row_to_json(arhitekt)) FROM (SELECT ime, prezime FROM arhitekt 
    NATURAL JOIN arhitektradiona WHERE arhitektradiona.sifStadion = stadion.sifStadion) AS arhitekt) 
    AS arhitekti FROM stadion NATURAL JOIN grad NATURAL JOIN drzava NATURAL JOIN klub`);

    let response = {status: "", message: "", response: ""};

    if(stadioni.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćeni stadioni";
    response.response = stadioni.rows;
    res.status(200).json(response);
};

exports.getStadion = async (req, res) => {

    const id = req.params.id;

    let response = {status: "", message: "", response: ""};

    if(isNaN(id) || id < 0 || id % 1 != 0) {
        response.status = "Bad Request";
        response.message = "Id stadiona mora biti prirodni broj";
        response.response = null;
        return res.status(400).json(response);
    }

    const stadion = await db.query(`SELECT sifStadion, naziv, nazivdrzava, nazivgrad, godinaotvorenja, kapacitet, rekordnaprisutnost, imekluba, 
    cijenaizgradnje, brojloza, (SELECT json_agg(row_to_json(arhitekt)) FROM (SELECT ime, prezime FROM arhitekt 
    NATURAL JOIN arhitektradiona WHERE arhitektradiona.sifStadion = stadion.sifStadion) AS arhitekt) 
    AS arhitekti FROM stadion NATURAL JOIN grad NATURAL JOIN drzava NATURAL JOIN klub WHERE sifStadion=${id}`)

    if(stadion.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!stadion.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji stadion sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    response.status = "OK";
    response.message = "Dohvaćen stadion";
    response.response = stadion.rows[0];
    res.status(200).json(response);
};

exports.postStadion = async (req, res) => {

    let response = { status: "", message: "", response: ""};

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        response.status = "Invalid Value";
        response.message = "Neispravno zadani podaci";
        response.response = errors;
        return res.status(400).json(response);
    }

    const { naziv, godinaOtvorenja, kapacitet, rekordnaPrisutnost, cijenaIzgradnje, brojLoza, sifGrad, sifKlub } = req.body;

    //Provjera postoji li vec stadion sa tim nazivom 
    const query1 = `SELECT * FROM stadion WHERE naziv=$1`;
    const postojiNaziv = await db.query(query1, [naziv]);
    if(postojiNaziv.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(postojiNaziv.rowCount) {
        response.status = "Already Exists";
        response.message = "Već postoji stadion sa tim nazivom";
        response.response = null;
        return res.status(403).json(response);
    }

    //Provjera postoji li klub sa tom šifrom
    const query2 = `SELECT * FROM klub WHERE sifKlub=$1`;
    const postojiKlub = await db.query(query2, [sifKlub]);
    if(postojiKlub.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!postojiKlub.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji klub sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    //Provjera postoji li grad sa tom šifrom
    const query3 = `SELECT * FROM grad WHERE sifGrad=$1`;
    const postojiGrad = await db.query(query3, [sifGrad]);
    if(postojiGrad.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!postojiGrad.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji grad sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    //Dodavanje stadiona
    const query4 = `INSERT INTO stadion (naziv, godinaotvorenja, kapacitet, rekordnaPrisutnost, 
        cijenaIzgradnje, brojLoza, sifGrad, sifKlub) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;
    const result = await db.query(query4, [naziv, godinaOtvorenja, kapacitet, rekordnaPrisutnost, cijenaIzgradnje, brojLoza, sifGrad, sifKlub]);
    if(result.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    const stadion = await db.query(`SELECT * FROM stadion WHERE naziv=$1`, [naziv]);
    if(stadion.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Uspješno dodan stadion";
    response.response = stadion.rows[0];
    res.status(200).json(response);
};

exports.putStadion = async(req, res) => {

    const id = req.params.id;
    
    let response = { status: "", message: "", response: ""};

    if(isNaN(id) || id < 0 || id % 1 != 0) {
        response.status = "Bad Request";
        response.message = "Id stadiona mora biti prirodni broj";
        response.response = null;
        return res.status(400).json(response);
    }

    //Provjera postoji li stadion sa tom šifrom
    const sqlQuery = `SELECT * FROM stadion WHERE sifStadion=$1`;
    const postojiSifra = await db.query(sqlQuery, [id]);
    if(postojiSifra.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!postojiSifra.rowCount) {
        response.status = "Not found";
        response.message = "Ne postoji stadion sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        response.status = "Invalid Value";
        response.message = "Neispravno zadani podaci";
        response.response = errors;
        return res.status(400).json(response);
    }

    const { naziv, godinaOtvorenja, kapacitet, rekordnaPrisutnost, cijenaIzgradnje, brojLoza, sifGrad, sifKlub } = req.body;

    //Provjera postoji li vec stadion sa tim nazivom 
    const query1 = `SELECT * FROM stadion WHERE naziv=$1`;
    const postojiNaziv = await db.query(query1, [naziv]);
    if(postojiNaziv.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(postojiNaziv.rowCount) {
        response.status = "Already Exists";
        response.message = "Već postoji stadion sa tim nazivom";
        response.response = null;
        return res.status(403).json(response);
    }

    //Provjera postoji li klub sa tom šifrom
    const query2 = `SELECT * FROM klub WHERE sifKlub=$1`;
    const postojiKlub = await db.query(query2, [sifKlub]);
    if(postojiKlub.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!postojiKlub.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji klub sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    //Provjera postoji li grad sa tom šifrom
    const query3 = `SELECT * FROM grad WHERE sifGrad=$1`;
    const postojiGrad = await db.query(query3, [sifGrad]);
    if(postojiGrad.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!postojiGrad.rowCount) {
        response.status = "Not Found";
        response.message = "Ne postoji grad sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    //Mijenjanje stadiona
    const query4 = `UPDATE stadion SET naziv=$1, godinaotvorenja=$2, kapacitet=$3, rekordnaPrisutnost=$4, 
        cijenaIzgradnje=$5, brojLoza=$6, sifGrad=$7, sifKlub=$8 WHERE sifStadion=$9`;
    const result = await db.query(query4, [naziv, godinaOtvorenja, kapacitet, rekordnaPrisutnost, cijenaIzgradnje, brojLoza, sifGrad, sifKlub, id]);
    if(result.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    const stadion = await db.query(`SELECT * FROM stadion WHERE sifStadion=$1`, [id]);
    if(stadion.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Uspješno promijenjen stadion";
    response.response = stadion.rows[0];
    res.status(200).json(response);
};

exports.deleteStadion = async(req, res) => {
    const id = req.params.id;

    let response = { status: "", message: "", response: ""};

    if(isNaN(id) || id < 0 || id % 1 != 0) {
        response.status = "Bad Request";
        response.message = "Id stadiona mora biti prirodni broj";
        response.response = null;
        return res.status(400).json(response);
    }

    //Provjera postoji li stadion sa tom šifrom
    const query2 = `SELECT * FROM stadion WHERE sifStadion=$1`;
    const postojiSifra = await db.query(query2, [id]);
    if(postojiSifra.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    if(!postojiSifra.rowCount) {
        response.status = "Not found";
        response.message = "Ne postoji stadion sa tom šifrom";
        response.response = null;
        return res.status(404).json(response);
    }

    const query = `DELETE FROM stadion WHERE sifStadion=$1`;
    const stadion = await db.query(query, [id]);
    if(stadion.error) {
        response.status = "Internal Server Error";
        response.message = "Greška prilikom dohvata podataka";
        response.response = null;
        return res.status(500).json(response);
    }

    response.status = "OK";
    response.message = "Uspješno obrisan stadion";
    response.response = null;
    res.status(200).json(response);
};