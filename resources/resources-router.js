const express = require("express");

const Resources = require("./resources-model.js")

const router = express.Router();

router.get("/", (req, res)=>{
    Resources.getResources()
    .then(resource=>{
        res.status(200).json(resource)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Unable to get resources"})
    })
})

router.get("/:id", (req, res)=>{
    Resources.getResourceById(req.params.id)
    .then(resource=>{
        if(resource){
            res.status(200).json(resource)
        }
        else{
            res.status(404).json({error: "Could not find resource with specified ID"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error: "Unable to get resource"})
    })
} )

router.post("/", (req, res)=>{
    if(req.body.name){
        const resource = {
            name: req.body.name,
            description: req.body.description || null,
        }
        Resources.insertResource(resource)
        .then(resou=>{
            res.status(201).json(resou)
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({error: "Unable to create resource"})
        })
    }
    else{
        res.status(400).json({error: "Resource must have a name"})
    }
})

module.exports = router