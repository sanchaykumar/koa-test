import { categoryPredictionByImage } from './categoryPrediction';

async function welcome(ctx, next) {
    ctx.body = 'Welcome to Waymo API service';
    await next();
}

module.exports = {
    welcome,
    categoryPredictionByImage
};
