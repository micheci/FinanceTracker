const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth")
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const postsController = require("../controllers/posts");
const eventController=require("../controllers/event")

router.post("/createEvent", eventController.createEvent);


module.exports = router;
