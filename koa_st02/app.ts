/// <reference path="./typings/index.d.ts" />

import * as koa from 'koa';
const app = new koa();

function sleep(ms: number) {
  return function(cb: any) {
    setTimeout(cb, ms);
  };
}

app.use(function * (next: any){
  let self: koa.Context =  this;

  let start = Date.now();
  yield sleep(30);
  yield next;
  let ms = Date.now() - start;
  console.log('%s %s - %s', self.method, self.url, ms);
});


app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);




