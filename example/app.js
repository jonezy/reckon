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
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    var dateTime = d.getMonth() + '/' + d.getDate() + '/' +  d.getFullYear() + ' ';
    var hour = d.getHours();
    var a = 'am';
    if(hour === 0) hour = 12;
    if(hour > 12) {
      hour = d.getHours() - 12;
      a = 'pm';
    }

    dateTime = dateTime + '' + hour;

    if(d.getMinutes() === 0)
      dateTime = dateTime + ':' + d.getMinutes() + '0';
    else 
      dateTime = dateTime = ':' + d.getMinutes();

    dateTime = dateTime + '' + a;

    return dateTime;
  },

  date_converter: function(utcSeconds) {
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString();
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

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
