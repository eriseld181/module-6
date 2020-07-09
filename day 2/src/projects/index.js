const express = require("express")
const ProjectSchema = require("./ProjectSchema")

const projectRouter = express.Router()
//get all project 
projectRouter.get("/", async (req, res, next) => {
    try {
        const project = await ProjectSchema.find(req.query)
        console.log(project)
        res.send(project)

    } catch (error) {
        next(error)
    }

})
//get the single project id
projectRouter.get("/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const project = await ProjectSchema.findById(id)
        if (project) {
            res.send(project)
        } else {
            const error = new Error()
            error.httpStatusCode = 404
            next(error)
        }
    } catch (error) {
        console.log(error)
        next("while reading project list a problem occurred!")

    }
})

//post a new project with the student id.

projectRouter.post("/:id/Projects")

module.exports = projectRouter