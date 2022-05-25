const models = require('../models/index.model');
const studentController = {};

studentController.getStudents = async(req,res)=>{
    const students = await models.Student.findAll();
    if(students.length > 0){
        res.json(students);
    }else{
        res.json({Message: "No students found"});
    }
}

studentController.saveStudent = async (req, res) => {
    let status = true;
    if(req.body.status=="Active"){
        status = true;
    }else if(req.body.status=="Unactive"){
        status = false;
    }
    await models.Student.create({
        name: req.body.name,
        age: req.body.age,
        status: status
    });
    
    res.json({
        status: "Student saved"
    });
}

studentController.getStudentsWhitQualification = async (req,res) => {
    const students = await models.Student.findAll({
        include:[{
            model: models.Qualifications
        }]
    });

    if(students.length > 0){
        res.json(students);
    }else{
        res.json({Message: "No students found"});
    }
}

module.exports = studentController;