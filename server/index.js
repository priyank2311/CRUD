const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'priyankuser',
    host: 'osyte-db-instance.cnhaav5v24yo.us-west-2.rds.amazonaws.com',
    password: 'priyank123',
    database: 'priyankdb',
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    // const from = req.body.from;
    // const to = req.body.to;
    // const cc = req.body.cc;
    // const message = req.body.message;

    db.query(
        "INSERT INTO information (name, age, country, position) VALUES (?,?,?,?)",
        [name, age, country, position],
        // "INSERT INTO email_table (from, to, cc, message) VALUES (?,?,?,?)",
        // [from, to, cc, message],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.listen(3001, () => {
    console.log('Ya server is working');
})