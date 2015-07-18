global.__CLIENT__ = false;
global.__SERVER__ = true;

import 'babel/polyfill';
import koa from 'koa';

// Create koa app
const app = koa();
export default app;

// Serve static assets
import serve from 'koa-static';
app.use(serve('public'));

// Serve api routes
import api from './api';
app.use(api());

// Serve application as intital html
import turbulence from './turbulence';
app.use(turbulence());

// Start up server
app.listen(3000);
console.log('ready');
