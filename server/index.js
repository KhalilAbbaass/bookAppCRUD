const express = require("express");
const mysql = require("mysql");


const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"PFH#23kgrw9",
    database:"bookApp"
})

app.get("/" , (req, res) => {
    res.json("hello this is the backend")
})
app.listen(8800, () => {
    console.log("Server is Running!")
})