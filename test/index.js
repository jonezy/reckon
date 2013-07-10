var should = require('should'),
    assert = require('assert'),
    Reckon = require('../lib/reckon');

var validOpts = {
  'apiKey':'1234'
};

var optionalOpts = {
  'apiKey': '1234',
  'units': 'ca'
};

var invalidOpts = {
  'zonk': '1234'
};

describe('reckon constructor with valid arguments', function() {
  it('should create without error', function() {
    assert.doesNotThrow( function() { 
    var reckon = new Reckon(validOpts);
    }, Error);
  });

  it('should have an apiKey that matches the apiKey in the arguments', function() {
    var reckon = new Reckon(validOpts);
    assert(reckon.apiKey, validOpts.apiKey, 'expected reckon.apiKey to equal validOpts.apiKey');
  });

  describe('with optional unit argument', function() {
  it('should have an apiKey that matches the apiKey in the arguments', function() {
    var reckon = new Reckon(optionalOpts);
    assert(reckon.apiKey, optionalOpts.apiKey, 'expected reckon.apiKey to equal validOpts.apiKey');
  });

  it('should have an units that matches the units in the arguments', function() {
    var reckon = new Reckon(optionalOpts);
    assert(reckon.units, optionalOpts.units, 'expected reckon.units to equal optionalOpts.units');
  });
  });
});

describe('reckoner contstructor with invalid arguments', function() {
  describe('with no options argument', function() {
    it('should throw an error', function() {
      assert.throws( function() {
        var reckon = new Reckon();
      }, Error);
    });
  });

  describe('with invalid options argument', function() {
    it('should throw an error', function() {
      assert.throws( function() {
        var reckon = new Reckon(invalidOpts);
      }, Error);
    });
  });
});
