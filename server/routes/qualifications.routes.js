const express = require('express');
const router = express.Router();

const qualificationController = require('../controllers/qualification.controller');

    router.get('/',qualificationController.getQualifications);
    router.post('/', qualificationController.addQualification);

module.exports = router;