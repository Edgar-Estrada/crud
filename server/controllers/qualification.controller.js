const models = require('../models/index.model');
const qualificationController = {};

qualificationController.getQualifications = async (req,res) => {
    const qualification = await models.Qualifications.findAll();
    res.json(qualification);
}

qualificationController.addQualification = async (req, res) => {
    let status = true;
    if(req.body.status=="Approved"){
        status = true;
    }else if(req.body.status=="Failed"){
        status = false;
    }
    models.Student.findOne({where: {name:req.body.studentName}}).then( (student) => {
        models.Qualifications.create({
            studentId: student.getDataValue("id"),
            qualification: req.body.qualification,
            status: status
        })
    })
    
    
    res.json({
        status: "Qualification saved"
    });
}

module.exports = qualificationController;