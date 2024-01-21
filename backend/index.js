const express = require("express");
const bodyParser = require("body-parser");
const webRoutes = require('./src/routes/web');
const cors = require('cors');

// membuat instance express
const app = express();
const port = 3001;

// configure CORS
app.use(cors());

// handle untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware use route
app.use('/web', webRoutes);

app.listen(port, () => {
    console.log(`success ${port}`);
});