const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
app.get('/:userQuery', (req, res) => {
    res.render('index', {
        data: {
            userQuery: req.params.userQuery,
            searchResults: ['book 1', 'book 2', 'book 3', 'book 4', 'book 5'],
            loggedIn: true,
            userName: 'sasha'
        }
    });
});

app.listen(3000);