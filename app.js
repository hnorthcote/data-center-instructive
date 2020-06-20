const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
require('dotenv').config();
const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');
const commentsRouter= require('./routes/comments');
const passport = require('passport');;
const methodOverride = require('method-override');
const app = express();
require('./config/database');
require('./config/passport');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded( { extended: false}));
app.use(session({
    secret: 'NoSecretsAllowed!!',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/new', projectsRouter);
app.use('/projects', projectsRouter);
app.use('/users', usersRouter);
app.use('/', commentsRouter);
module.exports = app;

