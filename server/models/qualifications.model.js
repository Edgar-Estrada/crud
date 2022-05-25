const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db')

class Qualifications extends Model{}
Qualifications.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentId: DataTypes.INTEGER,
    qualification: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: "qualification",
    timestamps: false
})

module.exports = Qualifications;