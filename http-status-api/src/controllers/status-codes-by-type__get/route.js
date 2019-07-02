const controller = require("./controller");

const path = "/status-codes/codes/:id";
const httpMethod = "get";

// Wrapper provides top-level exception-handling for async functions
const wrappedController = (req, res, next) =>
  controller(req, res, next).catch(next);

module.exports = app => app[httpMethod](path, wrappedController);
