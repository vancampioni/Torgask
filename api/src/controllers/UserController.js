const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.json');

const hashPassword = function (plainPassword) {
    return bcrypt.hashSync(plainPassword, saltRounds);
};

const decryptPassword = function (plainPassword, hashFromDB) {
    return bcrypt.compareSync(plainPassword, hashFromDB);
}

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

    async login(req, res) {
        try {
            const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({
                status: 400,
                message: "Todos os campos devem ser preenchidos!"
            });
        }
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            if (decryptPassword(senha, user.senha)) {

                //JWT
                const token = jwt.sign({ id: User.id }, jwtConfig.secret, {
                   expiresIn: 1200,
                });
                return res.status(200).json({
                    status: 200,
                    token,
                    user
                });
            }
            return res.status(401).json({
                status: 401,
                message: "Senha Inválida!"
            });
        }
        return res.status(404).json({
            status: 404,
            message: "E-mail não encontrado!"
        });
        }
        catch(err) {
            return commonErrorResponse(err, res);
        }
    }
};