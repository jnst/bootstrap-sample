'use strict';

const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

const PORT = 3000;

app.use(serve(__dirname + '/public'));
app.listen(PORT);

console.log(`listening on port ${PORT}`);
