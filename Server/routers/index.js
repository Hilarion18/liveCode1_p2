const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message : `It's from server....port 3000`
    })
})

module.exports = router