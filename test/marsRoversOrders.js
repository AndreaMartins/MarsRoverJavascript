var should = require('chai').should();
var marsRoversOrders= require('../marsRoversOrders');

describe('enterData', function(){

  it ('Should return the new position of the rover', function(){

    var selectedRover = {
      position: [1, 2],
      direction: "N"
    };
    var selectedChoice = "LMMRLRML";

    marsRoversOrders.enterData(selectedChoice, selectedRover).should.equal('5 3 W');

  });
});
