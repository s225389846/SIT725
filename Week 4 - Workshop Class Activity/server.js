var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const mongoose = require("mongoose");
const cardList = [
  {
    title: "Cloth 2",
    image: "images/cloth2.jpg",
    link: "About Cloth2",
    description: "This is cloth 2",
  },
  {
    title: "Cloth 3",
    image: "images/cloth3.jpeg",
    link: "About CLoth 3",
    description: "This is cloth 3",
  },
];
app.get("/api/projects", (req, res) => {
  res.json({ statusCode: 200, data: cardList, message: "Success" });
});

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});

mongoose.connect("mongodb://localhost:27017/sit725", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});
