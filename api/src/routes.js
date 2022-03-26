const express = require('express');
const UserController = require('./controllers/UserController');
const GoalsController = require('./controllers/GoalController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();

const jwt = require('jsonwebtoken');
const jwtConfig = require('../src/config/jwt.json');
const AuthController = require('./controllers/AuthController');
const User = require('./models/User');

function auth(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, jwtConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido'});

        req.user_id = decoded.user_id;
        next();
    });
}

// Login
routes.post('/auth', AuthController.login);

// Users
routes.get('/users', UserController.index);
routes.get('/users/:email', UserController.getUser);
routes.post('/users', UserController.create);

// Goals
routes.get('/goals', GoalsController.index);
routes.get('/goals/:id', GoalsController.goalById);
routes.post('/goal', GoalsController.create);
routes.put('/goals/:id',  GoalsController.update);
routes.delete('/goals/:id',  GoalsController.delete);

// Tasks
routes.get('/goal/:id/tasks', TaskController.getByGoal);
routes.get('/tasks/:id', TaskController.getById);
routes.post('/task', TaskController.create);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);
routes.get('/tasks/filter/late', TaskController.late);
routes.get('/tasks/filter/index', TaskController.index);
routes.get('/tasks/filter/today', TaskController.today);
routes.get('/tasks/filter/week', TaskController.week);
routes.get('/tasks/filter/month', TaskController.month);
routes.get('/tasks/filter/year', TaskController.year);


module.exports = routes;