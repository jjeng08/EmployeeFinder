//Imports and sets up express.
const express = require('express');
const app = express();
const path = require ('path');

//Selects a port.
const PORT = 8080;

//Enables all parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log(`App is now listening on PORT ${PORT}`)
  });