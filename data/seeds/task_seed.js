
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'task 1', notes: "this is a note for task 1", completed: false, project_id: 1},
        {id: 2, name: 'task 2', notes: "this is a note for task 2", completed: true, project_id: 2},
        {id: 3, name: 'task 3', notes: "this is a note for task 3", completed: false, project_id: 3},
        {id: 4, name: 'task 4', notes: "this is a note for task 1", completed: true, project_id: 1},
        {id: 5, name: 'task 5', notes: "this is a note for task 2", completed: false, project_id: 2},
        {id: 6, name: 'task 6', notes: "this is a note for task 3", completed: true, project_id: 3},
        {id: 7, name: 'task 7', notes: "this is a note for task 1", completed: false, project_id: 1},
        {id: 8, name: 'task 8', notes: "this is a note for task 2", completed: true, project_id: 2},
        {id: 9, name: 'task 9', notes: "this is a note for task 3", completed: false, project_id: 3},
      ]);
    });
};
