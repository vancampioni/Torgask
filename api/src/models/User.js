const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo NOME obrigatório!"
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo EMAIL obrigatório!"
                    },
                    isEmail: {
                        msg: "Email inválido!"
                    }
                }
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
                len: {
                    min: 8,
                    msg: "Senha deve ter no mínimo 8 caracteres!"    
                },
                validate: {
                    notEmpty: {
                        msg: "Campo SENHA obrigatório!"
                    }
                }
            }
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Goal, { foreignKey: 'user_id', as: 'goals' })
    }
}

module.exports = User;