var express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    console.log("Hello")
})


module.exports = router