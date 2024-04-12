const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: [true, "Please provide project title"],
    },
    description: {
        type: String,
        required: [true, "Please provide project description"],
    },
    githubLink: String,
    skills: String,
    learningOutcomes: String,
    projectPic: String
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
