const express = require("express");
const bodyParser = require("body-parser");
const webRoutes = require('./src/routes/web');

// membuat instance express
const db = require("./src/database/db");
const allRoutes = require("./src/app");
const app = express();
const port = 3000;

// db.connect((err) => {
//     if(err) {
//         console.log("koneksi gagal");
//     } else console.log("koneksi berhasil");
// })

// handle untuk parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware use route
app.use('/web', webRoutes);

app.use("/api/v1", allRoutes);

app.listen(port, () => {
    console.log(`success ${port}`);
});