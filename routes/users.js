const express = require('express');
const usersController = require('../controllers/users');
const auth = require('../middleware/authenticate');

const router = express.Router();

router.get('/me', auth, usersController.getProfile);

module.exports = router;
