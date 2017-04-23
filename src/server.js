import Koa from 'koa';
import KoaBody from 'koa-body';

import err from './helpers/error';
import { routes } from './routes';

const app = new Koa();

app.use(err);
app.use(routes());


// app.use(async function (ctx, next) {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

// app.use(async function (ctx, next) {
//     const start = new Date();
//     await next();
//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });



app.listen(8081, () => {
    console.log('Listening on port 8081');
});


// app.use(allowedMethods());

// const server = http.createServer(app.callback()).listen(config.server.port, function () {
//     console.log('%s listening at port %d', config.app.name, config.server.port);
// });

// module.exports = {
//     closeServer() {
//         server.close();
//     }
// };