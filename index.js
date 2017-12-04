const fetchData = require('./fetchData');
const marsRovers =require('./marsRovers');

fetchData.fetchData(process.argv[2]|| './inputData.txt', function(data){
  //1ST ELEMENT OF THE ARRAY SAVED IN VAR PLATOU
  var platou = [data[0].split(" ")[0], data[0].split(" ")[1]];
  //2ND AND 4TH ELEMENT OF THE ARRAY SAVED IN THE POSITION AND DIRECTION OF EACH ROVER
  var rovers = [{ position: [data[1].split(" ")[0], data[1].split(" ")[1]],
                  direction: data[1].split(" ")[2]},
                { position: [data[3].split(" ")[0], data[3].split(" ")[1]],
                  direction: data[3].split(" ")[2]}];
  //3RD AND 5TH ELEMENT OF THE ARRAY SAVED IN THE ARRAY USERCHOICES
  var userChoices =[data[2],
                    data[4]]


  const arrayResults= marsRovers.initRover(rovers, userChoices, platou);

  marsRovers.printCoordinates(arrayResults)
})
