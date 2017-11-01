const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require ('./models');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
//  db.sequelize.sync({ force: false });
  console.log(`Listening on port: ${PORT}`);
});