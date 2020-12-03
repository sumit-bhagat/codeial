const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract script and stylesheet from subpages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// import routes
app.use('/', require('./routes/index'));

//setting view engine using app.set method
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is runnigng on ${port}`);
})
