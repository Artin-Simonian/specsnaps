const express = require("express");
const router = express.Router();
const reviewCtrl = require("../../controllers/api/reviews");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.put("/:postId/reviews", ensureLoggedIn, reviewCtrl.createReview);
router.delete("/reviews/:id", ensureLoggedIn, reviewCtrl.deleteReview)

module.exports = router;
