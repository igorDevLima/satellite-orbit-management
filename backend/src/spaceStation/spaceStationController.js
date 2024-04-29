const spaceStationRepository = require("./spaceStationRepository");

class SpaceStationController {
  index(req, res) {
    const allSpaceStations = spaceStationRepository.getAll();

    return res.status(200).json({
      message: "All Space stations found in the database",
      allSpaceStations,
    });
  }

  store(req, res) {
    const addSpaceStation = spaceStationRepository.create(req.body);

    return res.status(201).json({
      message: "Space station added successfully",
      addSpaceStation,
    });
  }
}

module.exports = new SpaceStationController();
