const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            anotacao: DataTypes.STRING,
            estado: DataTypes.BOOLEAN,
            data_agendada: DataTypes.DATE,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Goal, { foreignKey: 'goal_id', as: 'goal' })
    }
}

module.exports = Task;