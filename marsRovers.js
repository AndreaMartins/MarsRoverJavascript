const marsRoversOrders = require('./marsRoversOrders');

function initRover(rovers, userChoices, platou) {
		var arrayResults = [];
		for (var i=0; i<rovers.length; i++){
			if (userChoices[i].length > 0) {
				var selectedChoice = userChoices[i];
				var selectedRover = rovers[i];
				arrayResults.push(marsRoversOrders.enterData(selectedChoice, selectedRover, platou));
			} else {
				//CASE THERE IS NO INPUT REMAINS THE SAME POSITION
				return rovers[i].position + " " + rovers[i].direction;
			}
		}
		return arrayResults;
	}

function printCoordinates(arrayResults){
		arrayResults.map(line => console.log(line))
}


module.exports = {
	initRover:initRover,
	printCoordinates: printCoordinates
}
