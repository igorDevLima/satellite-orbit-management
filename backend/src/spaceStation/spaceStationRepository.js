const { dbQuery } = require("../common/database/postgress");
const Repository = require("../common/core/class/Repository");
const spaceStationModel = require("./spaceStationModel");

class SpaceStationRepository extends Repository {
  async get() {}

  async getAll() {
    const query = super.qr("get", spaceStationModel.table);

    const result = await dbQuery(query);

    return result;
  }

  async create(spaceStationData) {
    const query = this.qr("create", spaceStationModel.injectionModel());
    
    const values = [
      spaceStationData.OBJECT_NAME,
      spaceStationData.OBJECT_ID,
      spaceStationData.EPOCH,
      spaceStationData.MEAN_MOTION,
      spaceStationData.ECCENTRICIT,
      spaceStationData.INCLINATION,
      spaceStationData.RA_OF_ASC_NODE,
      spaceStationData.ARG_OF_PERICENTER,
      spaceStationData.MEAN_ANOMALY,
      spaceStationData.EPHEMERIS_TYPE,
      spaceStationData.CLASSIFICATION_TYPE,
      spaceStationData.NORAD_CAT_ID,
      spaceStationData.ELEMENT_SET_NO,
      spaceStationData.REV_AT_EPOCH,
      spaceStationData.BSTAR,
      spaceStationData.MEAN_MOTION_DOT,
      spaceStationData.MEAN_MOTION_DDOT,
    ];

    const result = await dbQuery(query, values);

    return result;
  }
}

module.exports = new SpaceStationRepository();
