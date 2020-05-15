const express = require("express");

const Projects = require("./projects-model.js")

const router = express.Router();

router.get("/", (req, res)=>{
    Projects.getProjects()
    .then(projs=>{
        res.status(200).json(projs)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Unable to get projects"})
    })
})

router.get("/:id", (req, res)=>{
    Projects.getProjectById(req.params.id)
    .then(pr=>{
        if(pr){
            res.status(200).json(pr)
        }
        else{
            res.status(404).json({error: "Could not find project with specified ID"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Unable to get project"})
    })
})

router.get("/:id/tasks", (req, res)=>{
    Projects.getProjectById(req.params.id)
    .then(pr=>{
        if(pr){
            Projects.getTasks(req.params.id)
            .then(tasks=>{
                if(tasks.length){
                    res.status(200).json({Project: pr, Tasks: tasks})
                }
                else{
                    res.status(200).json({message: "Project has no tasks"})
                }
            })
        }
        else{
            res.status(404).json({error: "Could not find project with specified ID"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Unable to get project"})
    })
})

router.post("/:id/tasks", (req, res)=>{
    if(req.body.name){
        const task = {
            name: req.body.name,
            notes: req.body.notes || null,
            completed: req.body.compled || null,
            project_id: req.params.id
        }
        Projects.insertTask(task)
        .then(task=>{
            res.status(201).json(task)
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({error: "Unable to create task"})
        })
    }
    else{
        res.status(400).json({error: "Task must have a name"})
    }
})

router.post("/", (req, res)=>{
    if(!req.body.name){
        res.status(400).json({error: "Project must have a name"})
    }
    else{
        Projects.insertProject(req.body)
        .then(pr=>{
            res.status(201).json(pr)
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({error: "Unable to create project"})
        })
    }
})

module.exports = router;