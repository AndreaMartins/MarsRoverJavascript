var should = require('chai').should();
var marsRovers = require('../movingRover');

describe('turnLeft', function() {

    it('Should return W when the direction is N', function() {
      var selectedRover = {
        direction: "N"
      };
        marsRovers.turnLeft(selectedRover).should.equal('W');
    });
    it('Should return N when the direction is E', function() {
      var selectedRover = {
        direction: "E"
      };
        marsRovers.turnLeft(selectedRover).should.equal('N');
    });
    it('Should return E when the direction is S', function() {
      var selectedRover = {
        direction: "S"
      };
        marsRovers.turnLeft(selectedRover).should.equal('E');
    });
    it('Should return S when the direction is W', function() {
      var selectedRover = {
        direction: "W"
      };
        marsRovers.turnLeft(selectedRover).should.equal('S');
    });

});

describe('turnRight', function() {

    it('Should return E when the direction is N', function() {
      var selectedRover = {
        direction: "N"
      };
        marsRovers.turnRight(selectedRover).should.equal('E');
    });
    it('Should return S when the direction is E', function() {
      var selectedRover = {
        direction: "E"
      };
        marsRovers.turnRight(selectedRover).should.equal('S');
    });
    it('Should return W when the direction is S', function() {
      var selectedRover = {
        direction: "S"
      };
        marsRovers.turnRight(selectedRover).should.equal('W');
    });
    it('Should return N when the direction is W', function() {
      var selectedRover = {
        direction: "W"
      };
        marsRovers.turnRight(selectedRover).should.equal('N');
    });

});

describe('goForward', function() {

    it('Should add +1 to the second element of the array when the direction is N', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "N"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[3,4]);
    });
    it('Should add +1 to the first element of the array when the direction is E', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "E"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[4,3]);
    });
    it('Should add -1 to the second element of the array when the direction is S', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "S"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[3,2]);
    });

    it('Should add -1 to the first element of the array when the direction is W', function() {
      var selectedRover = {
        position: [3, 3],
        direction: "W"
      };
      var platou =[5, 5];
        marsRovers.goForward(selectedRover, platou).should.equal(selectedRover.position,[2,3]);
    });

});
