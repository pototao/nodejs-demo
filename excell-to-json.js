/*
var xlsx = require('node-xlsx');
var fs = require('fs');

var json_obj = xlsx.parse('./res/test.xlsx');
var json_str = JSON.stringify(json_obj);

//console.log(JSON.stringify(json_obj));

fs.writeFile('node-xlsx.json',json_str,function (error) {
	if (error) {
		throw error;
	}

	console.log('saved...');
});
*/

/*
fs.readFile('message.txt', 'utf8', function (err,data) {
    if (err){
		throw err;
	}
	console.log(data);
});
*/

/*
var xlsx_json = require("xlsx-to-json");

xlsx_json({
  input: __dirname + '/res/test.xlsx',
  output: __dirname + '/xlsx-to-json.json'
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    console.log(result);
  }
});
*/


var cv_json = require('convert-json');

cv_json({
	// now supporting csv, xls, xlsx, xml format
	input: './res/test.xlsx',
	output: 'convert-json.json'
	}, function(err, result) {
	if (err) {
		console.error(err);
	} else {
		console.log(result);
	}
});
