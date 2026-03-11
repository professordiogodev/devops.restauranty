const { expressjwt } = require("express-jwt");

const isAuthenticated = expressjwt({
  secret: process.env.SECRET || "MySecret1!",
  algorithms: ["HS256"],
  requestProperty: "payload"
});

module.exports = { isAuthenticated };