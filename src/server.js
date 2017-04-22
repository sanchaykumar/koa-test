import Koa from 'koa';
import Router from 'koa-router';
import request from 'request';
import bodyParser from 'koa-bodyparser';
import multer from 'koa-multer';

const app = new Koa();
const router = new Router();
var upload = multer();

router.get('/', async (ctx, next) => {
    ctx.body = "Hello!";
});

app.use(bodyParser({
  detectJSON: function (ctx) {
    return /\.json$/i.test(ctx.path);
  }
}));

app.use(bodyParser({
  extendTypes: {
    json: ['application/x-javascript']
  }
}));

app.use(bodyParser({
  onerror: function (err, ctx) {
    ctx.throw('body parse error', 422);
  }
}));

app.use(router.routes());


const auth_token = {
    'www.olx.in' : 'wFutcFmGBdDSmsr4cF3mox87NB7jG7Tmat96'
}

router.post('/api/v1/categoryPredictionByImage/', upload.single('image'), async (ctx, next) => {

    const url = 'https://zeus.hermes.naspersclassifieds.com/predict';

    const base64Data = ctx.req.file.buffer.toString('base64');

    var data = {
      "site_code" : "olxin",
      "id": "1234",
      "auth_token": auth_token[ctx.request.headers.host],
      "image_string": base64Data
    };

    request.post({url:url, formData: data}, function(err, httpResponse, body) {
      if (err) {
        return console.error('post failed:', err);
      }

      console.log('Post successful!  Server responded with:', body);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
