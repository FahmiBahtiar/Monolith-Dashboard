const router = require('express').Router()
const { dashboard } = require('../controllers')
const authenticate = require('../middlewares/authenticate')
setLayout = require('../middlewares/setLayout')

router.use(authenticate)
router.use(setLayout('dashboard'))
router.get('/', dashboard.home)
router.get('/post', dashboard.post.index)

module.exports = router