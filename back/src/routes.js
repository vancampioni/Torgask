const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const GoalsController = require('./controllers/GoalController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.create);

routes.get('/users/:user_id/goals', GoalsController.index);
routes.post('/users/:user_id/goals', GoalsController.create);

routes.get('/goals/:goal_id/tasks', TaskController.index);
routes.post('/goals/:goal_id/tasks', TaskController.create);

module.exports = routes;