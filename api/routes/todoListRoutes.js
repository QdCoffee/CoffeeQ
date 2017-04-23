'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/v1/buy/')
    // .get(todoList.list_all_tasks)
    .post(todoList.buy);


  app.route('/v1/redeem/')
  	.post(todoList.redeem);
    // .get(todoList.read_a_task)
    // .put(todoList.update_a_task)
    // .delete(todoList.delete_a_task);
};