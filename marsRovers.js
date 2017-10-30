var marsRoversOrders = require('./marsRoversOrders');


module.exports = {

//LOOP THE ROVERS THROUGTH INSTRUCTIONS GIVEN
initRover: function (rovers, userChoices) {
		var arrayResults = [];
		for (var i=0; i<rovers.length; i++){
			if (userChoices[i].length > 0) {
				var selectedChoice = userChoices[i];
				var selectedRover = rovers[i];
				arrayResults.push(marsRoversOrders.enterData(selectedChoice, selectedRover));
			} else {
				//CASE THERE IS NO INPUT REMAINS THE SAME POSITION
				console.log(rovers[i].position + " " + rovers[i].direction);
			}
		}
		return arrayResults;
	},

}
