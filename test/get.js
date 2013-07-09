var should = require('should'),
    assert = require('assert'),
    Reckon = require('../lib/reckon');

var validOpts = {
  'apiKey':'1234'
};

var validGetOpts = {
  'lon':'37.8267',
  'lat': '-122.423'
};

var invalidGetOpts = {
  'like': '1234',
  'test': 'xxxx'
};

var reckon;

beforeEach(function() {
  reckon = new Reckon(validOpts);
});

describe('reckon.get with invalid options', function() {
  describe('with empty options', function() {
    it('should throw an error', function() {
      assert.throws(function() {
      reckon.get(null, function() { });
      }, Error);
    });
  });

  describe('with invalid options', function() {
    it('should throw an error', function() {
      assert.throws(function() {
      reckon.get(invalidGetOpts, function() { });
      }, Error);
    });
  });
});

//describe('reckon.get with valid options', function() {
  //describe('with valid lat and lon', function() {
    //it('should run without error', function() {
      //assert.doesNotThrow(function() {
        //reckon.get(validGetOpts, function() { });
      //}, Error);
    //});
  //});
//});
