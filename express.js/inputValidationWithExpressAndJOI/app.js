const express = require('express')
const path = require('path')
const Joi = require('@hapi/joi')

const bodyParser = require('body-parser')
const app = express()


app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
});

app.post('/', (req, res) => {
    // console.log('req.body: \n', req.body);
    const schema = Joi.object({
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com', 'net']
                }
            }).required(),

        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{5,30}$/).required()
    });
    const {
        value,
        err
    } = schema.validate({
        email: req.body[0].value,
        password: req.body[1].value
    })

    console.log(Joi.attempt(value, schema, '! ERROR: '));
})

app.listen(3000);