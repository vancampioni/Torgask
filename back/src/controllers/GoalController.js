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
    }
};