var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var headers = req.headers;
    var ip = headers['x-forwarded-for'];
    var language = headers['accept-language'].split(',')[0];
    var software = headers['user-agent'].split(/\(|\)/)[1];
    res.send(JSON.stringify({
        ipaddress: ip
        , language: language
        , software: software
    }));
});

app.listen(process.env.PORT || 8080);