import zeusCategoryPrediction from '../services/zeusCategoryPrediction';

async function categoryPredictionByImage(ctx, next) {
    let host = ctx.req.headers.host;
    try {
        host = host.replace(/(http[s]?:\/\/)?(www\.)?/gi, '');
        const config = await require(`${__dirname}/../../config/${host}`);
        console.log(config);
    } catch (err) {
        throw new Error(err);
    }
    // let response = await zeusCategoryPrediction();

    // console.log(response);
    ctx.body = {
        name: 'xxx'
    };
    await next();
}

module.exports = {
    categoryPredictionByImage
};