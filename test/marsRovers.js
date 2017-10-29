var should = require('chai').should();
var marsRovers = require('../marsRovers');

describe('userInput', function(){

  it ('userInput', function(){

    marsRovers.userInput(userChoice, userChoice1).should.equal('33E');

  });
});
