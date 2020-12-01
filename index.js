const express = require('express');
const app = express();
const port = 8000;


// import routes
app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is runnigng on ${port}`);
})
