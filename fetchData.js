// THIS FUNCTION EXTRACTS EACH LINE OF "INPUTDAT.TXT" AND PUT IT IN AN ARRAY CALLED DATA

var fs = require('fs');
var path = require('path');
var readStream = fs.createReadStream('./inputData.txt', 'utf8');
var data = "";

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log(data);
    data = (data.split("\n"));
    module.exports = data;

})
