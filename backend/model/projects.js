const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        url: String,
        filename: String,
    },
    demoUrl: {
        type: String,
    },
    gitHubUrl: {
        type: String,
    }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;