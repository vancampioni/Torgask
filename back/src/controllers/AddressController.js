const Address = require('../models/Address');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.findByPk(user_id, {
                include: { association: 'addresses' }
            });

            return res.json(user);
        }
        catch {
            return res.status(400).send({ erro: 'Falha ao encontrar endereços.' })
        }
    },

    async create(req, res) {
        try {
            const { user_id } = req.params;

            const { cep, rua, numero, bairro, cidade, estado, pais } = req.body;

            const user = await User.findByPk(user_id);
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }

            const address = await Address.create({
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                pais,
                user_id,
            });

            return res.json(address);

        }
        catch {
            return res.status(400).send({ erro: 'Falha ao cadastrar endereço.' })
        }
    },

    async update(req, res) {
        try {
            const { user_id } = req.params;

            const { cep, rua, numero, bairro, cidade, estado, pais } = req.body;

            const user = await User.findByPk(user_id);
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }

            await Address.update(
                { cep, rua, numero, bairro, cidade, estado, pais },
                {
                    where: { user_id: req.params.user_id }
                }
            )

            return res.status(200).send({ message: 'Endereço atualizado com sucesso!' });

        }
        catch {
            return res.status(400).send({ erro: 'Falha ao atualizar endereço.' })
        }
    }
};