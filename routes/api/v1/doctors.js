const express = require('express');
const router = express.Router();


const doctorsController = require('../../../controllers/api/v1/doctors_controller');

router.post('/register',doctorsController.registerDoctor);

router.post('/login',doctorsController.createSession);



module.exports = router;