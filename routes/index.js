const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get('/', homeController.home);
// router.get('/two', homeController.click1);

module.exports = router;