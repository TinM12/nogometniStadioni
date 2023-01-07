const express = require('express');
const app = express();
const db = require('./db');
const port = 8080;
const API = require('./api');
const cors = require('cors');
var { expressjwt: jwt } = require('express-jwt');
var jwks = require('jwks-rsa');
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-nxxsg5rr4rv0qdjz.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'Moj API',
    issuer: 'https://dev-nxxsg5rr4rv0qdjz.us.auth0.com/',
    algorithms: ['RS256']
}).unless({ path: ['/dataCSV', '/dataJSON', '/']})

app.use(jwtCheck);

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

app.get('/profile', async (req, res) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        const response = await axios.get('https://dev-nxxsg5rr4rv0qdjz.us.auth0.com/userInfo', {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        });
        const userInfo = response.data;
        console.log(userInfo);
        res.send(userInfo);
    } catch(err) {
        res.send(err.message);
    }
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const status = error.status || '500';
    const message = error.message || 'Internal Server Error';
    res.status(status).send(message);
});

API(app);

app.listen(port);
console.log(`Started api on: ${port}`);





