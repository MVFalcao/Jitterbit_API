const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

function hashPassword(password) {
  return bcrypt.hash(String(password), SALT_ROUNDS);
}

function comparePassword(password, passwordHash) {
  return bcrypt.compare(String(password), String(passwordHash));
}

module.exports = {
  hashPassword,
  comparePassword
};
