var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var multer  = require('multer');
var path    = require("path");

app.use(multer({dest:__dirname+'/file/uploads/'}).any());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/get-file-size', function(req, res) {
    var resObj = {
        size: req.files[0].size
    };
    console.log('File details: Name - ' + req.files[0].originalname + ' Size - ' + req.files[0].size);
    res.end(JSON.stringify(resObj));
});

app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});