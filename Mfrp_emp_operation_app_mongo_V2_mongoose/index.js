const express = require('express');
// var employeesList = require("./data/employee")
var cors = require('cors');
const url= require('./config/db').dev_db_url;
const app = express();
app.use(express.json());
var mongoose= require('mongoose')

app.use(cors());

var cookieParser = require('cookie-parser');
var session = require('express-session')
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(session({
    secret: "nothing"
}))
// app.use(express.static("./resourcess"));



mongoose.connect(url, function (err) {
    if (err)
        console.log("Error ocurred while connecting DB.");
    if (!err)
        console.log("DB is connected successfully");
})
app.get("/", function (req, res) {
    console.log("path: ", req.url);
    res.send("Welcome to my home page");
});

app.use(require("./routes/employees_routes"));
const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started and running on port: ${PORT}`);
})


process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) 
  })