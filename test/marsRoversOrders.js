var should = require('chai').should();
var marsRoversOrders= require('../marsRoversOrders');

describe('enterData', function(){

  it ('enterData', function(){

    var selectedRover = {
      position: [1, 2],
      direction: "N"
    };
    var selectedChoice = "L";

    marsRoversOrders.enterData(selectedChoice, selectedRover).should.equal('12W');

  });
});
