
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'resouce 1', description: "this is the description for resouce 1"},
        {id: 2, name: 'resouce 2', description: "this is the description for resouce 2"},
        {id: 3, name: 'resouce 3', description: "this is the description for resouce 3"}
      ]);
    });
};
