const statuses = require("../../db/statuses.json");

const getStatuses = id => {
  return statuses.find(codeToFind => id === codeToFind.code);
};
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    let response;
    response = getStatuses(id);

    if (response) {
      res.status(200);
      res.json(response);
    } else {
      res.status(404);
      res.send(JSON.stringify({ message: "status code not found - " + id }));
    }
  } catch (e) {
    res.status(500);
    //res.json(new Error(e.message));
  }
};
