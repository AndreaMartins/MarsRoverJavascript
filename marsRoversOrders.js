var movingRover = require('./movingRover');

module.exports = {
//LOOPS THROUGH EACH STRING OF THE INSTRUCTIONS AND DEPENDING OF THE LETTERS(M, R OR L) CALLS A FUNCTION
enterData: function (selectedChoice, selectedRover, platou) {
		for (var i = 0; i < selectedChoice.length; i++) {
			if (selectedChoice[i] === "M") {
				movingRover.goForward(selectedRover, platou);
			} else if (selectedChoice[i] === "R") {
				movingRover.turnRight(selectedRover);
			} else if (selectedChoice[i] === "L") {
				movingRover.turnLeft(selectedRover);
			} else {
				console.log("Try it again");
			}
		}
		return [selectedRover.position[0].toString(), selectedRover.position[1].toString(),  selectedRover.direction].join(' ');
	}

}
