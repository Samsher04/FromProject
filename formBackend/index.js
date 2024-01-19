const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("./dbCancation")
const route = require("./Route/Route")
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(route)