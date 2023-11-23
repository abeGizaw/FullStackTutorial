const express = require("express");
const db = require("./models");

const app = express();

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
