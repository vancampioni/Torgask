const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const GoalsController = require('./controllers/GoalController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

const jwt = require('jsonwebtoken');
const jwtConfig = require('../src/config/jwt.json');

function auth(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, jwtConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido'});

        req.user_id = decoded.user_id;
        next();
    });
}

// Login
routes.post('/users/login', UserController.login);

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

// Addresses
routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.create);
routes.put('/users/:user_id/addresses', AddressController.update);

// Goals
routes.get('/users/:user_id/goals', auth, GoalsController.index);
routes.post('/users/:user_id/goals', auth, GoalsController.create);
routes.put('/users/:user_id/goals/:id', auth, GoalsController.update);
routes.delete('/users/:user_id/goals/:id', auth, GoalsController.delete);

// Tasks
routes.get('/goals/:goal_id/tasks', auth, TaskController.index);
routes.get('/goals/:goal_id/tasks/:id', auth, TaskController.getById);
routes.post('/goals/:goal_id/tasks', auth, TaskController.create);
routes.put('/goals/:goal_id/tasks/:id', auth, TaskController.update);
routes.delete('/goals/:goal_id/tasks/:id', auth, TaskController.delete);

module.exports = routes;