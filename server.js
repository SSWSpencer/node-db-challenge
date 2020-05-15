const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("./projects/projects-router.js")
const resourcesRouter = require("./resources/resources-router.js")

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)

server.get("/", (req, res)=>{
    res.status(200).json({api: "up"})
})


module.exports = server;