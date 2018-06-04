//Init modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Setting server
app.set('port', process.env.PORT || 3000);

//Middlwares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Endpoints
require('./routes/userRoutes')(app);


app.listen(app.get('port'), () =>{
    console.log("Server on port 3000");

});
