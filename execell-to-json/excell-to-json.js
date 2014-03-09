var xlsx_json = require("xlsx-to-json");

var fs = require('fs');
var path = require('path');
var dir_src = './res/';
var dir_dst = './json/';
var postfix = '.xlsx';

function walk(dir) {
	var dir_list = fs.readdirSync(dir);
	var files = [];

	dir_list.forEach(function(item) {
		if (fs.statSync(dir + item).isFile()) {
			if (path.extname(item) == postfix) {
				files.push(item);
			};
		};
	});

	return files;
}

var files_under_dir = walk(dir_src);

for (var i = 0; i < files_under_dir.length; i++) {
	console.log('exporting...', files_under_dir[i]);
	xlsx_json({
		input: dir_src + files_under_dir[i],
		output: dir_dst + path.basename(files_under_dir[i], postfix) + '.json'
	}, function(err, result) {
		if (err) {
			console.error(err);
		} else {}
	});
};