var express = require('express');
var engines = require('consolidate');
var mustache = require('mustache');
var hogan = require('hogan.js');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'mustache');
app.engine('html', engines.hogan); // tell Express to run .html files through Hogan
app.set('views', 'templates'); // tell Express where to find templates
//app.use(express['static'](path.join(__dirname, 'public'))); //link public directory, including css
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index1.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
