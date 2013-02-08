var express = require('express');
var fs = require('fs');
var app = express();

app.configure(function(){
  //middleware
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
});

app.get('/', function(req, res){
  res.send('<h1>Yay Twilio!</h1>');
});

//routes
fs.readdirSync(__dirname + '/routes').forEach(function(file) {
  require('./routes/' + file)(app);
});

app.listen(process.env.VCAP_APP_PORT || 3000);
