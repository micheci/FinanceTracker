const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth")
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const postsController = require("../controllers/posts");
const eventController=require("../controllers/event")

router.post("/createEvent", eventController.createEvent);
router.post("/createSub", eventController.createSub);
router.post("/findSub", eventController.findSub);
router.post("/personal/delete", eventController.deletePersonal);

router.post("/food/delete", eventController.deletePersonal);
router.post("/investments/delete", eventController.deletePersonal);
router.post("/savings/delete", eventController.deletePersonal);
router.post("/housing/delete", eventController.deletePersonal);
router.post("/school/delete", eventController.deletePersonal);
router.post("/utilities/delete", eventController.deletePersonal);
router.post("/transportation/delete", eventController.deletePersonal);
router.post("/recreation/delete", eventController.deletePersonal);
router.post("/medical/delete", eventController.deletePersonal);
router.post("/miscellaneous/delete", eventController.deletePersonal);





module.exports = router;
