/* UPDATE: Sorry for the delay. I have this one figured out.
 *  Should have working version by Sunday with my own code 
 * Some of this is cut  and paste. */




/* This is just a standard express server as demonstrated in class.
 * I had initially used bodyparser,  but it out to use this
 * configuration based on  class demo */


var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  