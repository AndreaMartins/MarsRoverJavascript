var should = require('chai').should();
var marsRovers = require('../movingRover');

describe('turnLeft', function() {

    it('turnLeft', function() {
      var selectedRover = {
        direction: "N"
      };
        marsRovers.turnLeft(selectedRover).should.equal('W');
    });
    it('turnRight', function() {
      var selectedRover = {
        direction: "E"
      };
        marsRovers.turnLeft(selectedRover).should.equal('N');
    });
    it('turnRight', function() {
      var selectedRover = {
        direction: "S"
      };
        marsRovers.turnLeft(selectedRover).should.equal('E');
    });
    it('turnRight', function() {
      var selectedRover = {
        direction: "W"
      };
        marsRovers.turnLeft(selectedRover).should.equal('S');
    });

});

describe('turnRight', function() {

    it('turnRight', function() {
      var selectedRover = {
        direction: "N"
      };
        marsRovers.turnRight(selectedRover).should.equal('E');
    });
    it('turnRight', function() {
      var selectedRover = {
        direction: "E"
      };
        marsRovers.turnRight(selectedRover).should.equal('S');
    });
    it('turnRight', function() {
      var selectedRover = {
        direction: "S"
      };
        marsRovers.turnRight(selectedRover).should.equal('W');
    });
    it('turnRight', function() {
      var selectedRover = {
        direction: "W"
      };
        marsRovers.turnRight(selectedRover).should.equal('N');
    });

});

describe('goForward', function() {

    it('goForward', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "N"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[3,4]);
    });
    it('goForward', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "E"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[4,3]);
    });
    it('goForward', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "S"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[3,2]);
    });

    it('goForward', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "W"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[2,3]);
    });

});
