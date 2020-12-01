const express = require('express');
const app = express();
const port = 8000;


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
