const Router = require("express");
const router = new Router();
const tourController = require("../controllers/tour-controller");

router.get("/tour", tourController.getChosenTours);
router.post("/tour", tourController.createTour);
router.get("/tours", tourController.getTours);

module.exports = router;
