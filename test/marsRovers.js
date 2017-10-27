var should = require('chai').should();
var marsRovers = require('../marsRovers');

describe('square', function() {
    it('should return the square of given numbers', function() {
        marsRovers.square(2).should.equal(4);
        marsRovers.square(3).should.equal(9);
    });
});

describe('sumy', function() {
    it('should return the square of given numbers', function() {
        marsRovers.sumy(2).should.equal(4);
        marsRovers.sumy(3).should.equal(6);
    });
});
