const Goal = require('../models/Goal');
const Task = require('../models/Task');
const { Op } = require('sequelize');
const current = new Date();

module.exports = {
    async index(req, res) {
        const { goal_id } = req.params;

        const goal = await Goal.findByPk(goal_id, {
            include: { association: 'tasks' }
        });

        return res.json(goal);
    },

    async getById(req, res) {
        const { goal_id } = req.params;

        const goal = await Goal.findByPk(goal_id, {
            include: { association: 'tasks' }
        });

        const task = await Task.findByPk(req.params.id);
        return res.json(task);
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
    },

    async update(req, res) {
        try {
            const { goal_id } = req.params;

            const { nome, anotacao, estado, data_agendada } = req.body;

            const goal = await Goal.findByPk(goal_id);
            if (!goal) {
                return res.status(400).json({ error: 'Meta não encontrada.' });
            }

            await Task.update(
                { nome, anotacao, estado, data_agendada },
                {
                    where: { goal_id: req.params.goal_id },
                    where: { id: req.params.id }
                }
            )

            return res.status(200).send({ message: 'Tarefa atualizada com sucesso!' });

        }
        catch {
            return res.status(400).send({ erro: 'Falha ao atualizar tarefa.' });
        }
    },

    async delete(req, res) {
        try {
            await Task.destroy({
                where: { user_id: req.params.user_id },
                where: { id: req.params.id }
            });
            return res.status(200).send({ message: 'Tarefa excluída com sucesso!' });
        }
        catch {
            res.status(400).send({ erro: 'Falha ao deletar tarefa.' });
        }
    },

    // FILTERS

    async late(req, res) {
        const tasks = await Task.findAll({
            where: { 
                data_agendada: {
                    [Op.lt]: current
                } 
            }
        });
        return res.status(200).json(tasks);
    },

    
};