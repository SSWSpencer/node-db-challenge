const db = require("../data/db-config.js")

module.exports = {
    getResources,
    getResourceById,
    insertResource,
}

function getResources(){
    return db("resources");
}

function getResourceById(id){
    return db("resources").where({id}).first();
}

function insertResource(resource){
    return db("resources").insert(resource, "id")
    .then(ids=>{
        return getResourceById(ids[0]);
    })
}