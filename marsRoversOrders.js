var movingRover = require('./movingRover');

module.exports = {
//CODE FOR THE SELECTED CHOICE - CALLS THE OTHER FUNCTIONS
enterData: function (selectedChoice, selectedRover) {
	for (var i = 0; i < selectedChoice.length; i++) {
		if (selectedChoice[i] === "M") {
			movingRover.goForward(selectedRover);
		} else if (selectedChoice[i] === "R") {
			movingRover.turnRight(selectedRover);
		} else if (selectedChoice[i] === "L") {
			movingRover.turnLeft(selectedRover);
		} else {
			console.log("Try it again");
		}
	}
	return selectedRover.position[0].toString() + selectedRover.position[1].toString() + selectedRover.direction
}

}
