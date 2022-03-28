const express = require('express');

const router = express.Router();


router.get('/api/v1', (req, res)=>{
    res.status(200).json({
        sucess:true,
        data:'Worked perfectly'
    })
})


module.exports = router;

