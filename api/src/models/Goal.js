const { Model, DataTypes } = require('sequelize');

class Goal extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            estado: DataTypes.BOOLEAN,
            data_inicio: DataTypes.DATE,
            data_fim: DataTypes.DATE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }),
        this.hasMany(models.Task, { foreignKey: 'goal_id', as: 'tasks' } )
    }
}

module.exports = Goal;