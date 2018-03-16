var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', {useMongoClient: true});
mongoose.Promise = global.Promise;

// Define which attributes describe a cat entity
var catSchema = mongoose.Schema({
   name: String,
   age: Number,
   isCool: Boolean
});

// Initialize a model entity which will help us manipulate the database (i.e. Cat.remove() will remove a cat)
var Cat = mongoose.model("Cat", catSchema);

// ----------------------------
// Adding a cat to the DB
// ----------------------------

// var amiral = new Cat({
//   name: "Amiral",
//   age: 11,
//   isCool: 1
// });

// amiral.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong!");
//     } else {
//         console.log("The following cat was persisted:");
//         console.log(cat);
//     }
// });

// Cat.create({
//   name: "Berlioz",
//   age: 10,
//   isCool: 1
// }, function(err, cat) {
//     if (err) {
//         console.log("Something went wrong:");
//         console.log(err);
//     } else {
//         console.log("The following cat was persisted:");
//         console.log(cat);
//     }
// });

// ----------------------------
// Querying the DB
// ----------------------------

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Oops, something went wrong!");
        console.log(err);
    } else {
        console.log(cats);
    }
});