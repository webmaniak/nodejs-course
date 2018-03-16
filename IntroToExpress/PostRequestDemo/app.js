var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// ---------------------------
// APPLICATION SETTINGS
// ---------------------------
app.use(express.static("public"));  // Serve static content at custom places (i.e. /public folder)
app.use(bodyParser.urlencoded({extended: true})); // activates body-parser
app.set("view engine", "ejs");      // Sets the view engine on EJS by default (files without extensions will be suffixed by .ejs)

// ---------------------------
// APPLICATION DATA
// ---------------------------
var friends = ["Mary", "Suzy", "Marc", "Helmut"];

// ---------------------------
// ROUTES
// ---------------------------

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function(req, res) {
    var name = req.body.friendName;
    friends.push(name);
    res.redirect("/friends");
});

app.get("*", function(req, res) {
    res.send("Oops, you got lost!");
});

// ---------------------------
// LISTENER
// ---------------------------
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running PostRequestDemo server on port " + process.env.PORT);
});