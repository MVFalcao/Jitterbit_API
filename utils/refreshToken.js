const crypto = require("crypto");

const REFRESH_TOKEN_TTL_DAYS = Number(process.env.REFRESH_TOKEN_TTL_DAYS || 7);

function generateRefreshToken() {
  return crypto.randomBytes(48).toString("hex");
}

function hashRefreshToken(refreshToken) {
  return crypto.createHash("sha256").update(String(refreshToken)).digest("hex");
}

function createRefreshTokenExpiry() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + REFRESH_TOKEN_TTL_DAYS);
  return expiry;
}

module.exports = {
  generateRefreshToken,
  hashRefreshToken,
  createRefreshTokenExpiry
};
