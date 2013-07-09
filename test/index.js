var should = require('should'),
    assert = require('assert'),
    Reckon = require('../lib/reckon');

var validOpts = {
  'apiKey':'1234'
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
