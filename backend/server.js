const express = require('express');
const app = express();
const db = require('./db');

app.get('/dataCSV', async (req, res) => {
    const data = (await db.query(`SELECT naziv, nazivdrzava, nazivgrad, godinaotvorenja, kapacitet, rekordnaprisutnost,
        imekluba, cijenaizgradnje, brojloza, ime, prezime FROM stadion NATURAL JOIN grad NATURAL JOIN drzava 
        NATURAL JOIN klub NATURAL JOIN arhitektradiona NATURAL JOIN arhitekt`
    )).rows;

    res.send(data);
});

app.get('/dataJSON', async (req, res) => {
    const data = (await db.query(
        `SELECT naziv, nazivdrzava, nazivgrad, godinaotvorenja, kapacitet, rekordnaprisutnost, imekluba, 
        cijenaizgradnje, brojloza, (SELECT json_agg(row_to_json(arhitekt)) FROM (SELECT ime, prezime FROM arhitekt 
        NATURAL JOIN arhitektradiona WHERE arhitektradiona.naziv = stadion.naziv) AS arhitekt) 
        AS arhitekti FROM stadion NATURAL JOIN grad NATURAL JOIN drzava NATURAL JOIN klub`
    )).rows;
    
    res.json(data);
});

app.listen(8080);





