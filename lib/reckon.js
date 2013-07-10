var request = require('request');

exports = module.exports = Reckon = function(opts) {
  if(!opts) throw new Error('You must pass in an options object argument');
  if(!opts.apiKey) throw new Error('You must pass in an object has with an apiKey property');

  this.apiKey = opts.apiKey;
  this.endPoint = 'https://api.forecast.io/forecast/<apiKey>/<lat>,<lon>';
  this.endPoint = this.endPoint.replace('<apiKey>', this.apiKey);
  if(opts.units) {
    this.units = opts.units;
    this.endPoint = this.endPoint + '?units=' + this.units;
  }

  return this;
};

Reckon.prototype.get = function(opts, cb) {
  if(!opts) throw new Error('You must pass in an arguments hash with lat/long (optional time)');
  if(!opts.lat) throw new Error('You must pass in a valid latitude to get a forecast');
  if(!opts.lon) throw new Error('You must pass in a valid longitude to get a forecast');

  var that = this;
  Object.keys(opts).forEach(function(key) {
    that.endPoint = that.endPoint.replace('<'+key+'>', opts[key]);
  });

  request.get(this.endPoint, function(err, res, data) {
    if(!err) {
      if(data.toString() === 'Forbidden') throw new Error(data);
      cb(JSON.parse(data));
    } else {
      console.log(err);
      throw new Error(err);
    }
  });

  return this;
};
