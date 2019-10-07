// express setup
var express = require("express");
var app = express();

// services & handlers
var timestampHandler = require("./timestampHandler.js");

// routes
// serve html file frontend on empty request
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

// take request, pass to request handler, respond
app.get("/api/timestamp/:timeInput", function(request, response) {
  const cookedTime = timestampHandler(request.params.timeInput);
  response.json(cookedTime);
});

// listeners
// listen for requests
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
