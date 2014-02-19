var csv = require("csv-to-json");

//parses file into json and returns a json object<br>
var json = csv.parse('./res/buff.csv');

//writes the parsed file to a file<br>
csv.write('csv-to-json.json');