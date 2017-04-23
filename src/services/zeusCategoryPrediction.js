// import request from 'request';

async function zeusCategoryPrediction() {
    console.log('Hello');
    // ctx.req.headers.host.replace(/(http[s]?:\/\/)?(www\.)?/gi, '');
    // await next();
}

// router.post('/api/v1/categoryPredictionByImage/', upload.single('image'), async (ctx) => {

//     // const url = 'https://zeus.hermes.naspersclassifieds.com/predict';

//     const base64Data = ctx.req.file && ctx.req.file.buffer.toString('base64');

//     var data = {
//         'site_code': 'olxin',
//         'id': '1234',
//         'auth_token': auth_token[ctx.request.headers.host],
//         'image_string': base64Data
//     };

//     ctx.body = data;

    // request.post({url:url, formData: data}, function(err, httpResponse, body) {
    //   if (err) {
    //     return console.error('post failed:', err);
    //   }

    //   console.log('Post successful!  Server responded with:', body);
    // });
// });

module.exports = {
    zeusCategoryPrediction
};