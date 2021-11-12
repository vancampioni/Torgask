const Goal = require('../models/Goal');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'goals' }
        });

        return res.json(user);
    },

    async create(req, res) {
        const { user_id } = req.params;

        const { nome, descricao, estado, assunto, data_inicio, data_fim } = req.body;

        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const goal = await Goal.create({ 
            nome, 
            descricao, 
            estado, 
            assunto, 
            data_inicio, 
            data_fim,
            user_id,  
        });

        return res.json(goal);
    },

    async update(req, res) {
        try {
            const { user_id } = req.params;

            const { nome, descricao, estado, assunto, data_inicio, data_fim } = req.body;

            const user = await User.findByPk(user_id);
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }

            await Goal.update(
                { nome, descricao, estado, assunto, data_inicio, data_fim },
                {
                    where: { user_id: req.params.user_id },
                    where: { id: req.params.id }
                }
            )

            return res.status(200).send({ message: 'Meta atualizada com sucesso!' });

        }
        catch {
            return res.status(400).send({ erro: 'Falha ao atualizar meta.' });
        }
    },

    async delete(req, res) {
        try {
            await Goal.destroy({
                where: { user_id: req.params.user_id },
                where: { id: req.params.id }
            });
            return res.status(200).send({ message: 'Meta excluída com sucesso!' });
        }
        catch {
            res.status(400).send({ erro: 'Falha ao deletar meta.' });
        }
    }
};