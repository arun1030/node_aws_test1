const express = require('express');
const test = require('./test/test')

const app = express();

app.use('/', test)


const port = process.env.port || 5000 ;
app.listen(port, ()=>{
    console.log('worked');
})
