var invert = require('./index.js');
var expect = require('chai').expect;
var obj = {site: "github", social: "facebook", language: "JavaScript"};

describe('tests for inverting key and values of an object', function() {
  it('should get inverted object', function() {
    expect(invert(obj)).to.eql({ github: 'site', facebook: 'social', JavaScript: 'language' });
  });

  it('should get same object if inverted two times inverted object', function() {
    expect(invert(invert(obj))).to.eql(obj);
  });
});
