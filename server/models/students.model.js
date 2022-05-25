const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db')

class Student extends Model{}
Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: "student",
    timestamps: false
})

module.exports = Student;