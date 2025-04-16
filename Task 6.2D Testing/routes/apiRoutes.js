const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const formController = require("../controllers/formController");

// API routes
router.get("/projects", projectController.getProjects);
router.post("/form", formController.submitForm);

module.exports = router;
