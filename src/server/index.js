var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello World';
});

console.log('App startet on http://localhost:3000');
app.listen(3000);
