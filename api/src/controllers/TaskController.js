const Goal = require('../models/Goal');
const Task = require('../models/Task');
const { Op } = require('sequelize');
const current = new Date();
const { 
    startOfDay,
    endOfDay,
    startOfWeek, 
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
} = require('date-fns');


module.exports = {
    
    async getById(req, res) {
        const { id } = req.params
        const task = await Task.findByPk(id);
        return res.json(task);
    },

    async getByGoal(req, res) {
        const { goal_id } = req.params;

        const goal = await Goal.findByPk(goal_id, {
            include: { association: 'tasks' }
        });

        const task = await Task.findAll();
        return res.json(task);
    },

    async create(req, res) {
        const { nome, anotacao, assunto, estado, data_agendada, goal_id } = req.body;

        const task = await Task.create({ 
            nome, 
            anotacao, 
            assunto,
            estado, 
            data_agendada, 
            goal_id  
        });

        return res.json(task);
    },

    async update(req, res) {
        try {
            const { nome, anotacao, assunto, estado, data_agendada } = req.body;

            await Task.update(
                { nome, anotacao, assunto, estado, data_agendada },
                {
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

    async index(req, res) {
        const tasks = await Task.findAll();
        return res.status(200).json(tasks);
    },

    async late(req, res) {
        const tasks = await Task.findAll({
            where: { 
                data_agendada: {
                    [Op.lt]: current.setDate(current.getUTCDate())
                } 
            }
        });
        console.log(current)
        return res.status(200).json(tasks);
    },

    async today(req, res) {
        const tasks = await Task.findAll({
           where: {
               data_agendada: {
                   [Op.gte]: startOfDay(current), [Op.lte]: endOfDay(current) 
               }
           } 
        });
        return res.status(200).json(tasks);
    },

    async week(req, res) {
        const tasks = await Task.findAll({
           where: {
               data_agendada: {
                   [Op.gte]: startOfWeek(current), [Op.lte]: endOfWeek(current) 
               }
           } 
        });
        return res.status(200).json(tasks);
    },

    async month(req, res) {
        const tasks = await Task.findAll({
           where: {
               data_agendada: {
                   [Op.gte]: startOfMonth(current), [Op.lte]: endOfMonth(current) 
               }
           } 
        });
        return res.status(200).json(tasks);
    },

    async year(req, res) {
        const tasks = await Task.findAll({
           where: {
               data_agendada: {
                   [Op.gte]: startOfYear(current), [Op.lte]: endOfYear(current) 
               }
           } 
        });
        return res.status(200).json(tasks);
    },
};