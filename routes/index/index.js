const Router = require('koa-router');
const subscriptions = require('../../db/index');

const router = new Router();

router.get('/index', async (ctx) => {
  ctx.response.body = subscriptions.data;
});

module.exports = router;
