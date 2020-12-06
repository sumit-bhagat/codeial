const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');



// used for session cookie and authentication
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);


app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract script and stylesheet from subpages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//setting view engine using app.set method
app.set('view engine', 'ejs');
app.set('views', './views');


// Mongostore is used to store the session cookie in db
app.use(session({
    name : 'codeial',
    // When encryption happens there is key to encode and decode, i.e. 
    // To change when deploying to production
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie :{
        maxAge : (1000 * 60 * 100)
    },
    store : new MongoStore(
        {
        mongooseConnection :db,
        autoRemove : 'disabled'

    },
    function(err){
        console.log( err || 'connect-mongo db setup ok');
    }
    )

}));


app.use(passport.initialize());
app.use(passport.session());

//middleware to set up authentication to check cookie if you user has signed in
app.use(passport.setAuthenticatedUser);

// import routes
app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is runnigng on ${port}`);
})
