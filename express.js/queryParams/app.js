const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World From Express!')
});

app.get('/example', (req, res) => res.send('routing to example route...'))
app.get('/example/:name/:age', (req, res) => {
    req.params
    console.log('req.params: ', req.params);
    res.send("user name: " + req.params.name + "\nuser age: " + req.params.age);

    console.log(req.query);
})






app.listen(3005);