const express = require('express');
const app = express();
const db = require('./db');
const port = 8080;
const API = require('./api');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

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
        NATURAL JOIN arhitektradiona WHERE arhitektradiona.sifStadion = stadion.sifStadion) AS arhitekt) 
        AS arhitekti FROM stadion NATURAL JOIN grad NATURAL JOIN drzava NATURAL JOIN klub`
    )).rows;
    
    res.json(data);
});

API(app);

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port);
console.log(`Started api on: ${port}`);





