const express = require("express");
const router = express.Router();
const pcCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", ensureLoggedIn, pcCtrl.create);
//router.post("/upload", ensureLoggedIn, pcCtrl.uploadPC);

module.exports = router;
