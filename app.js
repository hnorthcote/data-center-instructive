
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const port = process.env.PORT || '3000';
require('dotenv').config();

const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');
const passport = require('passport');;
const methodOverride = require('method-override');



const app = express();

require('./config/database');
require('./config/passport');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(methodOverride('_method'));

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true}));
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


//tell app to listen

app.listen(port, function(){
    console.log(`Express is listening on port:${port}`);
});

