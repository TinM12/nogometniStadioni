const { Router } = require('express');
const router = new Router();
const { body } = require('express-validator');

const { listaStadiona, getStadion, postStadion, putStadion, deleteStadion } = require('./controllers/StadionController');
const { getGrad, listaGradova} = require('./controllers/GradController');
const { getArhitekt, listaArhitekta } = require('./controllers/ArhitektController');
const { getKlub, listaKlubova, postKlub } = require('./controllers/KlubController');

router.get('/stadion', listaStadiona);
router.get('/stadion/:id', getStadion);
router.post('/stadion', [
    body('naziv').notEmpty(),
    body('godinaOtvorenja').notEmpty().isNumeric(),
    body('kapacitet').notEmpty().isNumeric(),
    body('rekordnaPrisutnost').notEmpty().isNumeric(),
    body('cijenaIzgradnje').notEmpty().isNumeric(),
    body('brojLoza').notEmpty().isNumeric(),
    body('sifGrad').notEmpty().isNumeric(),
    body('sifKlub').notEmpty().isNumeric()
], postStadion);
router.put('/stadion/:id', [
    body('naziv').notEmpty(),
    body('godinaOtvorenja').notEmpty().isNumeric(),
    body('kapacitet').notEmpty().isNumeric(),
    body('rekordnaPrisutnost').notEmpty().isNumeric(),
    body('cijenaIzgradnje').notEmpty().isNumeric(),
    body('brojLoza').notEmpty().isNumeric(),
    body('sifGrad').notEmpty().isNumeric(),
    body('sifKlub').notEmpty().isNumeric()
], putStadion);
router.delete('/stadion/:id', deleteStadion);

router.get('/grad', listaGradova);
router.get('/grad/:id', getGrad);

router.get('/arhitekt/:id', getArhitekt);
router.get('/arhitekt', listaArhitekta)

router.get('/klub/:id', getKlub);
router.get('/klub', listaKlubova);
router.post('/klub', [
    body('imeKluba').notEmpty()
], postKlub);

router.get('*', (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
});

router.post('*', (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
});

router.put('*', (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
});

router.delete('*', (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
});

router.patch('*', (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
});

router.options('*', (req, res) => {
    let response = {status: "Not Implemented", message: "Metoda nije implementirana za traženi resurs", response: null};
    res.status(501).json(response);
});

module.exports = router;