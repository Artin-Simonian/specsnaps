const express = require("express");
const router = express.Router();
const reviewCtrl = require("../../controllers/api/reviews");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.put("/:postId/reviews", ensureLoggedIn, reviewCtrl.createReview);
router.delete("/:postId/reviews/:id", ensureLoggedIn, reviewCtrl.deleteReview)

module.exports = router;
