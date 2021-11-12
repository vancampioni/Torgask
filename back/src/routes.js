const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const GoalsController = require('./controllers/GoalController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();


// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

// Addresses
routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.create);
routes.put('/users/:user_id/addresses', AddressController.update);

// Goals
routes.get('/users/:user_id/goals', GoalsController.index);
routes.post('/users/:user_id/goals', GoalsController.create);
routes.put('/users/:user_id/goals/:id', GoalsController.update);
routes.delete('/users/:user_id/goals/:id', GoalsController.delete);

// Tasks
routes.get('/goals/:goal_id/tasks', TaskController.index);
routes.post('/goals/:goal_id/tasks', TaskController.create);
routes.put('/goals/:goal_id/tasks/:id', TaskController.update);
routes.delete('/goals/:goal_id/tasks/:id', TaskController.delete);

module.exports = routes;