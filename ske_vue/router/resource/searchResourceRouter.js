const Router = require('koa-router')
const router = new Router()

const {
  getResourceControler,
  getRecommendResourceControler,
  getClassificationResourceControler,
  getSearchResourceControler
} = require('../../controler/resource')

/**
 * @route Get /resources/:_id
 * @description 返回资源
 * @access 接口是公开的
 */
router.get('/resources/:_id', getResourceControler)

/**
 * @route Get /recommend-resources/:sort
 * @description 返回热门的推荐资源
 * @access 接口是私密的
 */
router.get('/recommend-resources/:sort', getRecommendResourceControler)

/**
 * @route Get /classification-resources/:classification/:sort
 * @description 返回分类的资源
 * @access 接口是私密的
 */
router.get(
  '/classification-resources/:classification/:sort',
  getClassificationResourceControler
)

/**
 * @route Get /search
 * @description 根据title返回搜索的资源
 * @access 接口是私密的
 */
router.get('/search', getSearchResourceControler)

module.exports = router
