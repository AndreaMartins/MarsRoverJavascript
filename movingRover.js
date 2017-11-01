var data = require('./fetchData');

module.exports = {
  //FUNCTIONS THAT ARE CALLED DEPENDING OF THE LETTERS (M, R OR L)
  goForward: function (selectedRover, platou) {
  	switch (selectedRover.direction) {
  		case "N":
  			if (selectedRover.position[1] > platou[1]) { //INSTEAD OF 5 PUT PLATOU[1]
  				selectedRover.position[1] = 0;
  				break;
  			} else {
  				selectedRover.position[1]++;
  				break;
  			}
  			break;
  		case "E":
  			if (selectedRover.position[0] > platou[0]) {//INSTEAD OF 5 PUT PLATOU[0]
  				selectedRover.position[0] = 0;
  				break;
  			} else {
  				selectedRover.position[0]++;
  				break;
  			}
  			break;
  		case "S":
  			if (selectedRover.position[1] < 1) {
  				selectedRover.position[1] = platou[1];//INSTEAD OF 5 PUT PLATOU[1]
  				break;
  			} else {
  				selectedRover.position[1]--;
  				break;
  			}
  			break;
  		case "W":
  			if (selectedRover.position[0] < 1) {
  				selectedRover.position[0] = platou[0];//INSTEAD OF 5 PUT PLATOU[0]
  				break;
  			} else {
  				selectedRover.position[0]--;
  				break;
  			}
  			break;

  	}
  	return selectedRover.position
  },


  turnLeft: function (selectedRover) {
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
  	return selectedRover.direction
  },

  turnRight: function (selectedRover) {
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
  	return selectedRover.direction
  },

}
