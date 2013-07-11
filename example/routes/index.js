
var nconf = require('nconf');
var Reckon = require('../../lib/reckon');
var request = require('request');

nconf.argv().env().file({ file: 'settings.json'});

exports.index = function(req, res){
  var reckoner = new Reckon({apiKey:nconf.get('apiKey'), units: 'ca'});
  // these are some default lat and lon (liberty village);
  var lat = 43.6532;
  var lon = -79.3832;
  if(req.params.loc) {
    var locs = req.params.loc.split(',');
    lat = locs[0];
    lon = locs[1];

  var geo_url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=<lat>,<lon>&sensor=true";
  reckoner.get({lat:lat,lon:lon}, function(data) {
    geo_url = geo_url.replace('<lat>', lat);
    geo_url = geo_url.replace('<lon>', lon);

    request(geo_url, function(error, response, body) {
      var address_data = JSON.parse(body);
      var hood = address_data.results[0].address_components[2].short_name;
      var city = address_data.results[0].address_components[4].short_name;
      var country = address_data.results[0].address_components[7].short_name;

      res.render('index', {
        location: hood + ', ' + city + ', ' + country,
        results:data,
        fullResults:JSON.stringify(data, undefined, 2) 
      });
    });
  });
  }
   else {
      res.render('index', {
        results:null,
        fullResults:null 
      });

   }
};
