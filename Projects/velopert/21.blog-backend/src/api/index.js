import Router from 'koa-router';
import posts from './posts/index.mjs';

const api = new Router();

api.use('/posts', posts.routes());

export default api;
