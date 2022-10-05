var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.post('/', UserController.create);
router.post("/login", UserController.login)

module.exports = router;
