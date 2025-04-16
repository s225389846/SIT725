const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  size: String,
  color: String,
  email: String,
  contact: String,
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;
