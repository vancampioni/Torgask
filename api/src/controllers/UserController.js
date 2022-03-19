const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const hashPassword = function (plainPassword) {
    return bcrypt.hashSync(plainPassword, saltRounds);
};



module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        
        return res.json(users);
    },

    async create(req, res) {
        try {
            const { nome, email, senha } = req.body;
            const hashedPassword = hashPassword(senha);
            const user = await User.create({ 
                nome: nome,
                email: email,
                senha: hashedPassword 
            });
             return res.json(user);
           
        } catch {
            return res.status(400).send({ error: "Não foi possível realizar o cadastro!"});
        }
    },

    
};