const Student = require('./students.model');
const Qualifications = require('./qualifications.model');

Student.hasMany(Qualifications);
Qualifications.belongsTo(Student);

module.exports = {Student, Qualifications}