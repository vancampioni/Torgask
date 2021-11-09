const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        
        return res.json(users);
    },

    async create(req, res) {
        const { nome, email, senha } = req.body;

        const user = await User.create({ nome, email, senha });

        return res.json(user);
    }
};