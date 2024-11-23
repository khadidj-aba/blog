const express = require('express');
const { signup, signin } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;
