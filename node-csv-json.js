var node_cj = require("node-csv-json");
node_cj({
	input: "./res/buff.csv",
	output: "node-csv-json.json"
}, function(err, result) {
	if (err) {
		console.error(err);
	} else {
		console.log(result);
	}
});