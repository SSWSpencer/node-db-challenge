const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    insertProject,
    getProjectById,
    getTasks,
    insertTask,
}

function getProjects(){
    return db("projects");
}

function getProjectById(id){
    return db("projects").where({id}).first();
}

function insertProject(proj){
    return db("projects")
    .insert(proj, "id")
    .then(ids=>{
        return getProjectById(ids[0]);
    })
}

function getTasks(id){
    return db("tasks").where({project_id : id})
}

function insertTask(task){
    return db("tasks")
    .insert(task, "id")
}