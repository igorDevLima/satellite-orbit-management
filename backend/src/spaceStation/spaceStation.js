const { Router } = require("express");
const SpaceStationController = require("./spaceStationController");
const requiredBody = require("../common/middlewares/requiredBody");
const spaceStationModel = require("./spaceStationModel");

const router = Router();

router.get("/", (req, res) => SpaceStationController.index(req, res));
router.post("/", requiredBody(spaceStationModel.columns), (req, res) =>
  SpaceStationController.store(req, res)
);

module.exports = router;
