var should = require('chai').should();
var marsRovers = require('../marsRovers');

  describe('initRover', function(){

    it ('Should return the position of the first rover', function(){
      //ARRAY DATA
      var data = require('../fetchData');
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

      marsRovers.initRover(rovers, userChoices, platou)[0].should.equal('1 3 N');

    });

    it ('Should return the position of the second rover', function(){

      var data = require('../fetchData');
      var platou = [data[0].split(" ")[0], data[0].split(" ")[1]];

      var rovers = [{ position: [data[1].split(" ")[0], data[1].split(" ")[1]],
                      direction: data[1].split(" ")[2]},//2ND INPUT HAS TO BE SAVED HERE
      							{ position: [data[3].split(" ")[0], data[3].split(" ")[1]],
                      direction: data[3].split(" ")[2]}];//4RD INPUT HAS TO BE SAVED HERE
      var userChoices =[data[2],//3RD INPUT HAS TO BE SAVED HERE
      									data[4]]//5TH INPUT HAS TO BE SAVED HERE

      marsRovers.initRover(rovers, userChoices, platou)[1].should.equal('5 1 E');

    });
  });
