const { Router } = require('express');
const router = new Router();
const { body } = require('express-validator');

const { listaStadiona, getStadion, postStadion, putStadion, deleteStadion } = require('../controllers/StadionController');
const { getGrad, listaGradova} = require('../controllers/GradController');
const { getArhitekt, listaArhitekta } = require('../controllers/ArhitektController');
const { getKlub, listaKlubova, postKlub, deleteKlub } = require('../controllers/KlubController');
const { notFound } = require('../controllers/NotFoundController');
const { notImplemented } = require('../controllers/NotImplementedController');

//STADION
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
router.patch('/stadion', notImplemented);
router.options('/stadion', notImplemented);

//GRAD
router.get('/grad', listaGradova);
router.get('/grad/:id', getGrad);
router.post('/grad', notImplemented);
router.put('/grad/:id', notImplemented);
router.delete('/grad/:id', notImplemented);
router.patch('/grad', notImplemented);
router.options('/grad', notImplemented);

//ARHITEKT
router.get('/arhitekt/:id', getArhitekt);
router.get('/arhitekt', listaArhitekta);
router.post('/arhitekt', notImplemented);
router.put('/arhitekt/:id', notImplemented);
router.delete('/arhitekt/:id', notImplemented);
router.patch('/arhitekt', notImplemented);
router.options('/arhitekt', notImplemented);

//KLUB
router.get('/klub/:id', getKlub);
router.get('/klub', listaKlubova);
router.post('/klub', [
    body('imeKluba').notEmpty()
], postKlub);
router.put('/klub/:id', notImplemented);
router.delete('/klub/:id', deleteKlub);
router.patch('/klub', notImplemented);
router.options('/klub', notImplemented);

//OPCENITO
router.get('*', notFound);
router.post('*', notFound);
router.put('*', notFound);
router.delete('*', notFound);
router.patch('*', notFound);
router.options('*', notFound);

module.exports = router;