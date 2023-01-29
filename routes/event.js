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

router.post("/food/delete", eventController.deleteFood);
router.post("/investments/delete", eventController.deletePersonal);
router.post("/savings/delete", eventController.deleteSavings);
router.post("/housing/delete", eventController.deleteHousing);
router.post("/school/delete", eventController.deleteSchool);
router.post("/utilities/delete", eventController.deleteUtilities);
router.post("/transportation/delete", eventController.deleteTransportation);
router.post("/recreation/delete", eventController.deleteRecreation);
router.post("/medical/delete", eventController.deleteMedical);
router.post("/miscellaneous/delete", eventController.deleteMiscellaneous);





module.exports = router;
