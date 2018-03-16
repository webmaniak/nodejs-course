var express = require("express");
var app = express();

// ---------------------------
// APPLICATION SETTINGS
// ---------------------------
app.use(express.static("public"));  // Serve static content at custom places (i.e. /public folder)
app.set("view engine", "ejs");      // Sets the view engine on EJS by default (files without extensions will be suffixed by .ejs)

// ---------------------------
// ROUTES
// ---------------------------

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function(req, res) {
    var posts = [
            { title: "ABC of nothing", author: "Me, Myself and I" },
            { title: "Baby Zebra", author: "Brad Lay" },
            { title: "Long Time No See, Stranger!", author: "Alzheimer's Hand" },
            { title: "Wall of Blood", author: "Scary Little Singers" }
        ];
    res.render("posts", { posts: posts });
});

app.get("*", function(req, res) {
    res.send("Oops, you got lost!");
});

// ---------------------------
// LISTENER
// ---------------------------
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running EJSDemo server on port " + process.env.PORT);
});