const Router = require('koa-router')

const router = new Router()

const {
  editResourceControler,
  increaseCollectionCountControler,
  increaseLikeCountControler,
  createCommentControler
} = require('../../controler/resource')

/**
 * @route PUT /resources/:r_id
 * @description 资源编辑
 * @access 接口是私密的
 */
router.put('/resources/:r_id', editResourceControler)

/**
 * @route PUT /resources/:_id/collection-counts
 * @description 增加资源收藏
 * @access 接口是私密的
 */
router.put(
  '/resources/:_id/collection-counts',
  increaseCollectionCountControler
)

/**
 * @route PUT /resources/:_id/like-counts
 * @description 增加资源点赞
 * @access 接口是私密的
 */
router.put('/resources/:_id/like-counts', increaseLikeCountControler)

/**
 * @route POST /resources/:_id/comments
 * @description 增加评论到resource的comments中
 * @access 接口是私密的
 */
router.post('/resources/:_id/comments', createCommentControler)

module.exports = router
