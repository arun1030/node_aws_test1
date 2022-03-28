const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Its from Nodejs')
})

app.listen(3000, ()=>{
    console.log('worked');
})