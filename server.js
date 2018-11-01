//Imports and sets up express.
const express = require('express');
const path = require ('path');
const app = express();

//Selects a port.
var PORT = process.env.PORT ||3000;

//Enables all parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function(){
	console.log(`App is now listening on PORT ${PORT}`)
  });