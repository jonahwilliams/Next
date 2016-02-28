'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var koa = _interopDefault(require('koa'));

const app = koa();

app.use(function* () {
  this.body = "hello world";
});

app.listen(8080);