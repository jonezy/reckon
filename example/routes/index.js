
var nconf = require('nconf');
var Reckon = require('../../lib/reckon');

nconf.argv().env().file({ file: 'settings.json'});

exports.index = function(req, res){
  var reckoner = new Reckon({apiKey:nconf.get('apiKey'), units: 'ca'});

  var lat = 43.6532;
  var lon = -79.3832;

  reckoner.get({lat:lat,lon:lon}, function(data) {
    res.render('index', { 
      results:data,
      fullResults:JSON.stringify(data, undefined, 2) 
    });
  });
};
