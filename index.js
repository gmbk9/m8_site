
var uncool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

/*
function cool(){
    console.log("foolio")
    //var ghoulio = doc.getElementById('ghoulio')
    return "<h1 style=\"color:blue;\">roxaaaaaaaaaaaaannneeee</h1><br><h1 style=\"color:red;\">purarrarheaaattffuaejiais?</h1>"
}*/

app.get('/uncool', function(request, response) {
  response.send(uncool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
