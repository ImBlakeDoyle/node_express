const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

const students = require('./students.js');

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/", (req, res) => {
    let thestudents = [];
    for (let i = 0; i < 3; i ++){
        thestudents.push(students[Math.floor(Math.random() * students.length)]);
    }
    res.render("home", {thestudents});
});

app.get("/students", (req, res) => {
    res.send(students);
});

app.post("/students", (req, res, next) => {
    console.log ("This is middleware");
    next();
}, (req, res) => {
    console.log(req.body);
    students.push(req.body.name);
    res.send("create new student");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
