const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/database/db");
const allRoutes = require("./src/app");
const app = express();
const port = 3000;

db.connect((err) => {
    if(err) {
        console.log("koneksi gagal");
    } else console.log("koneksi berhasil");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", allRoutes);

app.listen(port, () => {
    console.log(`success ${port}`);
});