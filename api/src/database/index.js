const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Goal = require('../models/Goal');
const Task = require('../models/Task');

const connection = new Sequelize(dbConfig);

User.init(connection);
Goal.init(connection);
Task.init(connection);

User.associate(connection.models);
Goal.associate(connection.models);
Task.associate(connection.models);

module.exports = connection;