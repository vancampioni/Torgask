const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasOne(models.Address, { foreignKey: 'user_id', as: 'addresses' })
    }
}

module.exports = User;