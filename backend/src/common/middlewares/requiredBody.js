const { BadRequestError } = require("../core/api/Error");

const requiredBody = (requirePropertiesArray) => (req, res, next) => {
  const body = req.body;

  requirePropertiesArray.forEach((element) => {
    if (!body.hasOwnProperty(element)) {
      throw new BadRequestError(`Missing required field in the body: ${element} `);
    }
  });
  next();
};

module.exports = requiredBody;
