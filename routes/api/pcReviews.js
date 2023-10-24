const express = require("express");
const router = express.Router();
const reviewCtrl = require("../../controllers/api/reviews");
const ensureLoggedIn = require("../../config/ensureLoggedIn");


router.post("/", ensureLoggedIn, reviewCtrl.createReview);
router.delete("/", ensureLoggedIn, reviewCtrl.delete)