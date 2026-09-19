const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Demo@12345",
    database: "cinora_db"
});


db.connect((err) => {

    if (err) {
        console.log("MySQL connection failed");
    } else {
        console.log("MySQL connected successfully");
    }

});


app.get("/movies", (req, res) => {

    db.query("SELECT * FROM movies", (err, results) => {

        if (err) {
            res.status(500).json({
                error: "Database error"
            });

        } else {
            res.json(results);
        }

    });

});


app.listen(3000, () => {

    console.log("Backend running on port 3000");

});