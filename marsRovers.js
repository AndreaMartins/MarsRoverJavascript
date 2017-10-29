var marsRoversOrders = require('./marsRoversOrders');


//SHOWS DIMENSIONS OF THE SQUARE . assume is 10x10
var platou = [5, 5]

//BOTH START IN THE LOWER LEFT
var marsRovers = [
{
	position: [1, 2],
	direction: "N",
	userChoice: "LMLMLMLMM"
},
{ position: [3, 3],
	direction: "E",
	userChoice: "MMRMMRMRRM"
}; ]

//RECOGNIZE WHICH INPUT GOES FOR WHICH ROBOT

module.exports = {


 userInput: function( userChoice, marsRover) {
	if (userChoice.length > 0) {
		var selectedChoice = userChoice;
		var selectedRover = marsRover;
		marsRoversOrders.enterData(userChoice, marsRover);
	} else {
		//CASE THERE IS NO INPUT REMAINS THE SAME POSITION
		return marsRover.position[0].toString() + marsRover.position[1].toString() + marsRover.direction
	}
};
