const crypto = require("crypto");

module.exports = function generateRandomString() {
  const length = 15;
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, length); // return required number of characters
};


