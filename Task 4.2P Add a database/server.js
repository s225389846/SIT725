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
    link: "About Cloth 3",
    description: "This is cloth 3",
  },
];

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model("Project", ProjectSchema);

cardList.forEach(async (card) => {
  const newProject = new Project(card);
  await newProject.save();
});

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find({});
  res.json({ statusCode: 200, data: projects, message: "Success" });
});

const FormSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  size: String,
  color: String,
  email: String,
  contact: String,
});
const Form = mongoose.model("Form", FormSchema);

app.post("/api/form", async (req, res) => {
  const { firstname, lastname, size, color, email, contact } = req.body;
  console.log("Form Data: ", firstname);
  var newForm = new Form({
    firstname,
    lastname,
    size,
    color,
    email,
    contact,
  });

  try {
    newForm.save();
    res.json({ statusCode: 200, message: "Form submitted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ statusCode: 500, message: "Error saving form data!" });
  }
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});

mongoose
  .connect("mongodb://localhost:27017/sit725", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});
