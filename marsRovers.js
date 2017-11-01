var marsRoversOrders = require('./marsRoversOrders');

module.exports = {

//RECEIVES THE ARRAYS (ROVERS, USERCHOICES AND PLATOU) AND RETURNS AN ARRAY WITH THE RESULTS OF THE INSTRUCTIONS GIVEN
initRover: function (rovers, userChoices, platou) {
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
	},

}
