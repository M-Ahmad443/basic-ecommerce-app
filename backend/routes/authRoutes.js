const router=require('express').Router()
const {loginHandler}=require('../routesHandler/auth/loginHandler')
const {registerHandler}=require('../routesHandler/auth/registerHandler')

router.post('/login', loginHandler)
router.post('/register', registerHandler)


module.exports=router