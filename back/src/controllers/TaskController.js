const Goal = require('../models/Goal');
const Task = require('../models/Task');

module.exports = {
    async index(req, res) {
        const { goal_id } = req.params;

        const goal = await Goal.findByPk(goal_id, {
            include: { association: 'tasks' }
        });

        return res.json(goal);
    },

    async create(req, res) {
        const { goal_id } = req.params;

        const { nome, anotacao, estado, data_agendada } = req.body;

        const goal = await Goal.findByPk(goal_id);
        if (!goal) {
            return res.status(400).json({ error: 'Cadastre uma meta primeiro!' });
        }

        const task = await Task.create({ 
            nome, 
            anotacao, 
            estado, 
            data_agendada, 
            goal_id,  
        });

        return res.json(task);
    }
};