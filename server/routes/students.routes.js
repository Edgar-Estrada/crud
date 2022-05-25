const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');

    router.get('/', studentController.getStudents);
    router.post('/', studentController.saveStudent);

    router.get('/studentQualification',studentController.getStudentsWhitQualification);

module.exports = router;