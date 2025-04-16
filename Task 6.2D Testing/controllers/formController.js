const Form = require("../models/form");

exports.submitForm = async (req, res) => {
  const { firstname, lastname, size, color, email, contact } = req.body;

  const newForm = new Form({
    firstname,
    lastname,
    size,
    color,
    email,
    contact,
  });

  try {
    await newForm.save();
    res.json({ statusCode: 200, message: "Form submitted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ statusCode: 500, message: "Error saving form data!" });
  }
};
