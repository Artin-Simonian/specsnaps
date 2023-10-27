const express = require("express");
const router = express.Router();
const upload = require("multer")();
const pcCtrl = require("../../controllers/api/posts");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", ensureLoggedIn, upload.single('image'), pcCtrl.create);
router.get("/", pcCtrl.getAllPCs);
router.get("/:postId", pcCtrl.getById);

//router.delete("/", ensureLoggedIn, pcCtrl.deletePost)
//router.post("/upload", ensureLoggedIn, pcCtrl.uploadPC);

module.exports = router;
