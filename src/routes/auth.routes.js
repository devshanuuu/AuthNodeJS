const express = require('express');
const authController = require('../controllers/auth.conrtroller');

const router = express.Router();

router.post('/register', authController.resgisterUser)

module.exports = router;