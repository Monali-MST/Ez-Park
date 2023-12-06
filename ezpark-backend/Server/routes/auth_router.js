const express = require('express')
const router = express.Router()
const login = require('../api_operations_1/operations_3/login.js');

router.post('/login' , async (req,res,next)=>{
    login(req , res)
});

module.exports = router
