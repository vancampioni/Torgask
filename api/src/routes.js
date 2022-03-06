const express = require('express');
const UserController = require('./controllers/UserController');
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
routes.post('/authenticate', UserController.login);

// Users
routes.get('/users', auth, UserController.index);
routes.post('/users', UserController.create);

// Goals
routes.get('/goals', auth, GoalsController.index);
routes.post('/goals', auth, GoalsController.create);
routes.put('/goals/:id', auth, GoalsController.update);
routes.delete('/goals/:id', auth, GoalsController.delete);

// Tasks
routes.get('/goal/:id/tasks', TaskController.getByGoal);
routes.post('goal/:id/task', auth, TaskController.create);
routes.put('goal/:id/tasks/:id', auth, TaskController.update);
routes.delete('goal/:id/task/:id', auth, TaskController.delete);
routes.get('/tasks/filter/late', auth, TaskController.late);
routes.get('/tasks/filter/index', auth, TaskController.index);
routes.get('/tasks/filter/today', auth, TaskController.today);
routes.get('/tasks/filter/week', auth, TaskController.week);
routes.get('/tasks/filter/month', auth, TaskController.month);
routes.get('/tasks/filter/year', auth, TaskController.year);


module.exports = routes;