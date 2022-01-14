const express = require('express');

const usersRouter = require('./users.router');
const inventariosRouter = require('./inventarios.router');
const facturasRouter = require('./facturas.router');
const impuestosRouter = require('./impuestos.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
    router.use('/inventarios', inventariosRouter);
    router.use('/facturas', facturasRouter);
    router.use('/impuestos', impuestosRouter);
}

module.exports = routerApi;
