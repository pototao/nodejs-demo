var xlsx_json = require("xlsx-to-json");

var fs = require('fs');
var path = require('path');
var dir_src = './res/';
var dir_dst = './json/';
var postfix = '.xlsx';

function walk(dir) {
	var files_under_dir = fs.readdirSync(dir);
	var files = [];

	files_under_dir.forEach(function(item) {
		if (fs.statSync(dir + item).isFile()) {
			if (path.extname(item) == postfix) {
				files.push(item);
			};
		};
	});

	return files;
}

var files_under_dir = walk(dir_src);

files_under_dir.forEach(
	function(filename) {
		var output_file = path.basename(filename, postfix) + '.json';
		xlsx_json({
			input: dir_src + filename,
			output: dir_dst + output_file
		}, function(err, result) {
			if (err) {
				console.error(err);
			} else {
				console.log("Exported:", filename + " --> " + output_file);
			}
		});
	}
);

// for (var i = 0; i < files_under_dir.length; i++) {
// 	console.log('exporting...', files_under_dir[i]);
// 	xlsx_json({
// 		input: dir_src + files_under_dir[i],
// 		output: dir_dst + path.basename(files_under_dir[i], postfix) + '.json'
// 	}, function(err, result) {
// 		if (err) {
// 			console.error(err);
// 		} else {}
// 	});
// };