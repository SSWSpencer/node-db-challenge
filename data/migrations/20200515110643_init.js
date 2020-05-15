
exports.up = function(knex) {
  return knex.schema.createTable("projects", projects=>{
      projects.increments();
      projects.string("name", 255).notNullable().unique();
      projects.string("description", 255);
      projects.boolean("completed").defaultTo(false);
  })
  .createTable("tasks", tasks=>{
      tasks.increments();
      tasks.string("name", 255).notNullable().unique();
      tasks.string("notes", 255);
      tasks.boolean("completed").defaultTo(false);
      tasks.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onUpdate("CASCADE").onDelete("RESTRICT");
  })
  .createTable("resources", resources=>{
      resources.increments();
      resources.string("name", 255).notNullable().unique();
      resources.string("description", 255);
  })
  .createTable("project_resources", pr=>{
      pr.increments();
      pr.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onUpdate("CASCADE").onDelete("RESTRICT");
      pr.integer("resource_id").unsigned().notNullable().references("id").inTable("resources").onUpdate("CASCADE").onDelete("RESTRICT");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects").dropTableIfExists("tasks").dropTableIfExists("resources").dropTableIfExists("project_resources");
};
