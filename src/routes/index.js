import Router from 'koa-router';
import { welcome, categoryPredictionByImage } from '../controllers';
import koaMulter from 'koa-multer';

const router = new Router();
const upload = koaMulter();

router
    .get('/', welcome)
    .post('/api/v1/categoryPredictionByImage/', upload.single('image'), categoryPredictionByImage);

module.exports = {
    routes() {
        return router.routes();
    }
};
