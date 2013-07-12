var express = require('express'), 
    cons = require('consolidate'),
    moment = require('moment'),
    swig = require('swig'),
    http = require('http'),
    path = require('path');

var routes = require('./routes');
var app = express();

app.locals({
  time_converter: function(utcSeconds) {
    return moment.unix(utcSeconds).format("M/D/YYYY hh:mm a");
  },

  date_converter: function(utcSeconds) {
    return moment.unix(utcSeconds).format("MMMM D, YYYY");
  }
});
// all environments
app.set('port', process.env.PORT || 3000);
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

swig.init({
  root: __dirname +'/views',
  allowErrors: true
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.isDebug = true;
}

app.get('/:loc?', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
