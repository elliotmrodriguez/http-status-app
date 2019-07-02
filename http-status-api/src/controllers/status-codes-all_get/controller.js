const statuses = require("../../db/statuses.json");

module.exports = async (req, res) => {
  try {
    res.status(200);
    res.send(statuses);
  } catch (e) {
    res.status(500);
    res.send(new Error(e.message));
  }
};
