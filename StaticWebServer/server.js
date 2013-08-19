var express = require("express");
var app = express();
var baseDir = __dirname + '/';	// static folder path
	//baseDir = __dirname + '/';

//app.use(express.directory(baseDir));
app.use(express.static(baseDir));

console.log('dirname:'+ baseDir);
/* serves main page */
app.get("/", function(req, res) {
	console.log('request index.html');
	res.sendfile('index.html')
});

app.get(/^(.+)$/, function(req, res) {
	console.log('static file request : ' + req.params);
	res.sendfile(req.params[0]);
});
var port = (_ref = (_ref1 = process.env.PORT) != null ? _ref1 : process.argv.splice(2)[0]) != null ? _ref : 3005;
app.listen(port, function() {
	console.log("Listening on " + port);
});