// const db_connection= require('./database_Connection/db_connection');

const express=require('express');

const router= express.Router();
console.log('456')
router.get('/',(req,res)=>{
    res.send('hi')
})

module.exports = router;