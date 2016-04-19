var express = require("express");
var http = require("http");
var app = express();
var server = http.Server(app);
var io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {

});

server.listen(3000);
