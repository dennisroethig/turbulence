global.__CLIENT__ = false;
global.__SERVER__ = true;

import 'babel/polyfill';
import koa from 'koa';

const app = koa();
export default app;

import serve from 'koa-static';
app.use(serve('public'));

import api from './api';
app.use(api());

import turbulence from './turbulence';
app.use(turbulence());

app.listen(3000);
console.log('ready');
