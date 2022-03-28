const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Its from Nodejs')
})

const port = process.env.port || 3000 ;
app.listen(port, ()=>{
    console.log('worked');
})