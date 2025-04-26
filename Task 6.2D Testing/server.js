const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // Serve public folder for static assets (images, css, js)

// Routes
const apiRoutes = require("./routes/apiRoutes");
const webRoutes = require("./routes/webRoutes");

app.use("/api", apiRoutes);
app.use("/", webRoutes); // Serve the index.html file on the root route

// Database Connection
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
  console.log("Connected to MongoDB!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening to: " + port);
});
