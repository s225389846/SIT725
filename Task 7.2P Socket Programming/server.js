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

var port = process.env.port || 3000;
let serverInstance = app.listen(port, () => {
  console.log("App listening to: " + port);
});

const io = require("socket.io")(serverInstance);
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("emitting", "I am boardcasting message to my client");
  }, 1000);
});