const router = require('express').Router()
const Controller = require('../controller')
const authentication = require('../middlewares/authentication') 

//client
router.get('/c/products', Controller.fetchProductClient)
router.get('/c/products/:productId', Controller.fetchProductDetail)
router.get('/c/categories', Controller.getCategory)

//admin
router.post('/register', authentication, Controller.register)
router.post('/login', Controller.login)

//product
router.use(authentication)
router.post('/products', Controller.addProduct)
router.get('/products', Controller.fetchProductUser)
router.get('/products/:productId', Controller.fetchProductUserById)
router.put('/products/:productId', Controller.updateProduct)
router.delete('/products/:productId', Controller.destroyProduct)

//category
router.post('/categories', Controller.addCategory)
router.get('/categories', Controller.getCategory)
router.get('/categories/:catId', Controller.getCategoryById)
router.patch('/categories/:catId', Controller.patchCategory)
router.delete('/categories/:catId', Controller.destroyCategory)



module.exports = router