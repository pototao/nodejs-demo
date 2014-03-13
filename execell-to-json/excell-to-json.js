var xlsx_json = require("xlsx-to-json");

var fs = require('fs');
var path = require('path');
var dir_src = './excell/';
var dir_dst = './json/';
var postfix = '.xlsx';


var args = process.argv;


//支持命令行传参
if (args.length <= 2) {

	//如果没传参，就到处/res目录下全部的东西
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

} else if (args.length > 2) {

	//如果有传参，就只导出传参的文件
	var files_to_export = args.slice(2);
	var cur_dir = process.cwd();

	files_to_export.forEach(
		function(filename) {

			var output_file = path.basename(filename, postfix) + '.json';
			xlsx_json({
				input: filename,
				output: cur_dir + "/" + output_file
			}, function(err, result) {
				if (err) {
					console.error(err);
				} else {
					console.log("Exported:", filename + " --> " + output_file);
				}
			});
		}
	);

} else {
	console.log("************** 呵呵 傻逼了吧 **************");
}

//遍历dir目录 返回这个目录下所有文件 postfix后缀的文件
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