const express = require("express");
const bodyParser = require("body-parser");
const registerControllers = require("./boot/registerControllers");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//const statuses = require("./db/statuses.json");

const startAPIServer = (port = 3000) =>
  new Promise(resolve => {
    registerControllers(app).then(() => {
      const server = app.listen(port, () => {
        console.log("http-status-api listening on port ", port);
        resolve(server);
      });
    });
  });

module.exports = startAPIServer;
