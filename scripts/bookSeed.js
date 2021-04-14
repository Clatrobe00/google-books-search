var mongoose = require("mongoose");
var db = require("../models/books");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
});

var bookSeed = [
  {
    title: "Redemption Ark",
    authors: ["Alistair Reynolds"],
    description: "The sequel to Revelation Space",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FRevelation-Space-Alastair-Reynolds%2Fdp%2F0441009425&psig=AOvVaw3ool3TftZLTW-f5OJSvbEn&ust=1618343104569000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIih-Pe7-e8CFQAAAAAdAAAAABAD",
    link: "https://en.wikipedia.org/wiki/Revelation_Space"
  },
];

db.deleteMany({})
  .then(
    db.collection.insertMany(bookSeed).then((data) => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });