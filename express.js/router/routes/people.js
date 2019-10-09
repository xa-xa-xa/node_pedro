const express = require('express')
const route = express.Router()

route.use((req, res, next) => {
    console.log('middleware being use with routes')
    next() // always use with custom middleware
})

route.get('/', (req, res) => res.send('/ - being hit'))
route.get('/example', (req, res) => res.send('/example - being hit'))

module.exports = route