const Model = require("../common/core/class/Model");

class SpaceStationModel extends Model {
  constructor() {
    const columns = [
      "OBJECT_NAME",
      "OBJECT_ID",
      "EPOCH",
      "MEAN_MOTION",
      "ECCENTRICIT",
      "INCLINATION",
      "RA_OF_ASC_NODE",
      "ARG_OF_PERICENTER",
      "MEAN_ANOMALY",
      "EPHEMERIS_TYPE",
      "CLASSIFICATION_TYPE",
      "NORAD_CAT_ID",
      "ELEMENT_SET_NO",
      "REV_AT_EPOCH",
      "BSTAR",
      "MEAN_MOTION_DOT",
      "MEAN_MOTION_DDOT",
    ];
    super({ table: "spacial_stations", columns });
  }
}

const instance = new SpaceStationModel();

module.exports = instance;
