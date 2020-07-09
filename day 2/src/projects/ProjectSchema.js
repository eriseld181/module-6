const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const ProjectSchema = new Schema(
    {
        projectName: String,
        projectType: String,
        collaborators: { type: Array },
        StudentId: Object
    }
)
module.exports = mongoose.model("Project", ProjectSchema)