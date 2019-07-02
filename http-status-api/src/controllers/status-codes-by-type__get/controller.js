const statuses = require("../../db/statuses.json");

const getStatuses = id => {
  return statuses.filter(statusInfo =>
    statusInfo.code.toString().startsWith(id)
  );
};
module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    let response;
    response = getStatuses(id);

    if (response && response.length) {
      res.status(200);
      res.json(response);
    } else {
      res.status(404);
      res.send(JSON.stringify({ message: "statuses not found" }));
    }
  } catch (e) {
    res.status(500);
    res.send(new Error(e.message));
  }
};
