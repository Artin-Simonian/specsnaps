const express = require("express");
const router = express.Router();
const reviewCtrl = require("../../controllers/api/reviews");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.put("/:postId/reviews", ensureLoggedIn, reviewCtrl.createReview);

module.exports = router;
