var express = require('express');
var app = express();

// -------------------------
// ROUTES
// -------------------------

app.get("/", function(req, res) {
    res.send("Hello World!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
    res.send("MEOW!");
});

app.get("/tellme/:phrase", function(req, res) {
    res.send("You asked me to tell you: " + req.params.phrase);
});

app.get("/if/:this/then/:that", function(req, res) {
    res.send("If " + req.params.this + " then " + req.params.that);
});

app.get("*", function(req, res) {
   res.send("Oops, you seem to be lost...");
});

// -------------------------
// LISTENER
// -------------------------

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started on port " + process.env.PORT);
})