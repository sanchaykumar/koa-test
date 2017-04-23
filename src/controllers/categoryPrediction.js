async function categoryPredictionByImage(ctx, next) {
    ctx.body = {
        name: 'xxx'
    };
    await next();
}

module.exports = {
	categoryPredictionByImage
};