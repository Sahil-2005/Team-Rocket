const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    region: { type: String, required: true },
    zipcode: { type: String, required: true },
    reason: { type: String, required: true },
    instagramHandle: { type: String, required: true },
    description: { type: String, required: true },
    files: { type: [String], required: true }, // Array of file paths or URLs
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
