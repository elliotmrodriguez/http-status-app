const glob = require("glob");

module.exports = app =>
  new Promise((resolve, reject) => {
    glob("src/controllers/*/route.js", (err, controllerModules) => {
      if (err) {
        reject(err);
      } else {
        controllerModules.forEach(controllerModule => {
          const registerController = require(`../../${controllerModule}`);
          registerController(app);
        });
        resolve();
      }
    });
  });
