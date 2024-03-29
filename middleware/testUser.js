const BadRequestError = require("../errors/bad-request");
const { BadRequest } = require("../errors/bad-request");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test User. Read Only");
  }
  next();
};
module.exports = testUser;
