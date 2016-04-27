var express = require("express");
var http = require("http");
var app = express();
var server = http.Server(app);
var io = require("socket.io")(server);

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

var lifeValues = [20, 20];

io.on("connection", function(socket) {
    socket.on("action", function(data) {
        var increment = data.command == "increase" ? 1 : -1;
        lifeValues[parseInt(data.player)] += increment;

        io.emit("lifeChange", {values: lifeValues});
    });
});

server.listen(3000);
