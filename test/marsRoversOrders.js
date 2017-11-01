var should = require('chai').should();
var marsRoversOrders= require('../marsRoversOrders');

describe('enterData', function(){

  it ('Should return the new position of the rover', function(){

    var selectedRover = {
      position: [1, 2],
      direction: "N"
    };
    var selectedChoice = "LMMRLRML";

    var platou =[5,5]

    marsRoversOrders.enterData(selectedChoice, selectedRover, platou).should.equal('5 3 W');

  });
});
