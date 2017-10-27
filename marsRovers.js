

//SHOWS DIMENSIONS OF THE SQUARE . assume is 10x10
var platou = [5, 5]

//BOTH START IN THE LOWER LEFT
var marsRover = {
	position: [1, 2],
	direction: "N"
};

var marsRover1 = {
	position: [3, 3],
	direction: "E"
};
//INSTRUCTIONS FOR EACH ROVER
var userChoice = "LMLMLMLMM"

var userChoice1 = "MMRMMRMRRM"

userInput();

//RECOGNIZE WHICH INPUT GOES FOR WHICH ROBOT

module.exports = {
  square: function (a) {
    return a*a;
  },

	sumy: function (a) {
    return a+a;
  }
};

function userInput() {

	if (userChoice.length > 0) {
		var selectedChoice = userChoice;
		var selectedRover = marsRover;
		enterData(selectedChoice, selectedRover);
	} else {
		//CASE THERE IS NO INPUT REMAINS THE SAME POSITION
		console.log(marsRover.position[0].toString() + marsRover.position[1].toString() + marsRover.direction);
		return marsRover.position[0].toString() + marsRover.position[1].toString() + marsRover.direction
	}

	if (userChoice1.length > 0) {
		var selectedChoice = userChoice1;
		var selectedRover = marsRover1;
		enterData(selectedChoice, selectedRover);
	} else {
		//CASE THERE IS NO INPUT REMAINS THE SAME POSITION
		console.log(marsRover1.position[0].toString() + marsRover1.position[1].toString() + marsRover1.direction);
		return marsRover1.position[0].toString() + marsRover1.position[1].toString() + marsRover1.direction
	}
}


//CODE FOR THE SELECTED CHOICE - CALLS THE OTHER FUNCTIONS
function enterData(selectedChoice, selectedRover) {
	for (var i = 0; i < selectedChoice.length; i++) {
		if (selectedChoice[i] === "M") {
			goForward(selectedRover);
		} else if (selectedChoice[i] === "R") {
			turnRight(selectedRover);
		} else if (selectedChoice[i] === "L") {
			turnLeft(selectedRover);
		} else {
			console.log("Try it again");
		}
	}
	console.log(selectedRover.position[0].toString() + selectedRover.position[1].toString() + selectedRover.direction);
	return selectedRover.position[0].toString() + selectedRover.position[1].toString() + selectedRover.direction
}

//FUNTIONS THAT ARE CALLED DEPENDING OF THE INPUT

function goForward(selectedRover) {
	switch (selectedRover.direction) {
		case "N":
			if (selectedRover.position[1] > 4) {
				selectedRover.position[1] = 0;
				break;
			} else {
				selectedRover.position[1]++;
				break;
			}
			break;
		case "E":
			if (selectedRover.position[0] > 4) {
				selectedRover.position[0] = 0;
				break;
			} else {
				selectedRover.position[0]++;
				break;
			}
			break;
		case "S":
			if (selectedRover.position[1] < 1) {
				selectedRover.position[1] = 5;
				break;
			} else {
				selectedRover.position[1]--;
				break;
			}
			break;
		case "W":
			if (selectedRover.position[0] < 1) {
				selectedRover.position[0] = 5;
				break;
			} else {
				selectedRover.position[0]--;
				break;
			}
			break;
	}
}

function turnLeft(selectedRover) {
	switch (selectedRover.direction) {
		case "N":
			selectedRover.direction = "W";
			break;
		case "E":
			selectedRover.direction = "N";
			break;
		case "S":
			selectedRover.direction = "E";
			break;
		case "W":
			selectedRover.direction = "S";
			break;
	}
}

function turnRight(selectedRover) {
	switch (selectedRover.direction) {
		case "N":
			selectedRover.direction = "E";
			break;
		case "E":
			selectedRover.direction = "S";
			break;
		case "S":
			selectedRover.direction = "W";
			break;
		case "W":
			selectedRover.direction = "N";
			break;
	}
}



	//exports._test = {
	  //marsRover: marsRover,
	  //marsRover1: marsRover1
	//}
