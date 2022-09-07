var express = require('express');
var router = express.Router();
const {home} = require("../controllers/index.controllers")
/* GET home page. */
router.get('/', home);

module.exports = router;
