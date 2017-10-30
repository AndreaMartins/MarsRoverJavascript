var should = require('chai').should();
var marsRovers = require('../marsRovers');


describe('initRover', function(){

  it ('should return an array with the new positions of the rovers', function(){

//SHOWS DIMENSIONS OF THE SQUARE . IT IS ASSUMMED AS 5x5
    var platou = [5, 5]

//SHOWS POSITIONS AND DIRECTIONS OF THE ROVER TO BE TESTED
    var rovers = [{ position: [1, 2], direction: "N"},
    							{ position: [3, 3], direction: "E"}];

//SHOWS INSTRUCTIONS TO BE FOLLOWED BY EACH ROVER
    var userChoices =["LMLMLMLMM","MMRMMRMRRM" ]

    marsRovers.initRover(rovers, userChoices)[0].should.equal('13N');

  });
});

describe('initRover', function(){

  it ('should return an array with the new positions of the rovers', function(){

//SHOWS DIMENSIONS OF THE SQUARE . IT IS ASSUMMED AS 5x5
    var platou = [5, 5]

//SHOWS POSITIONS AND DIRECTIONS OF THE ROVER TO BE TESTED
    var rovers = [{ position: [1, 2], direction: "N"},
    							{ position: [3, 3], direction: "E"}];

//SHOWS INSTRUCTIONS TO BE FOLLOWED BY EACH ROVER
    var userChoices =["LMLMLMLMM","MMRMMRMRRM" ]

    marsRovers.initRover(rovers, userChoices)[1].should.equal('51E');

  });
});
