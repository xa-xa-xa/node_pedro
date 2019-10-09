const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

//middleware  function
app.use('/example', (req, res, next) => {
    console.log('from middleware function: ', req.url, req.method);
    req.banana = 'banana';
    next();
})

app.get('/', (req, res) => {
    console.log(req)
    res.send('MiddleWare!');

})


app.listen(3000);