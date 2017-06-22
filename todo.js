const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

const todos = [
  "Wash the car",
  "Learn to code"
];

app.get('/', function (req, res) {
res.render('todo', {todos: todos});
});

app.post('/', function(req, res) {
    // var errors = req.validationErrors();s
    // var html = errors;
    // res.send(html);
    todos.push(req.body.input);
    res.redirect('/');
});

app.listen(3000, function () {
  console.log('Successfully started todo list app');
});
