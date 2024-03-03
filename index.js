import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const styleAndScript = {
    about: {style: "about", script: ""},
    contact: {style: "contact", script: ""},
    course: {style: "course", script: "course"},
    faqs: {style: "faqs", script: "faqs"},
    index: {style: "index", script: "index"},
    origins: {style: "origins", script: ""},
    practitioner: {style: "practitioner", script: ""}
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", styleAndScript["index"]);
});

app.get("/about", (req, res) => {
    res.render("about.ejs", styleAndScript["about"]);
});

app.get("/practitioner", (req, res) => {
    res.render("practitioner.ejs", styleAndScript["practitioner"]);
});

app.get("/origins", (req, res) => {
    res.render("origins.ejs", styleAndScript["origins"]);
});

app.get("/course", (req, res) => {
    res.render("course.ejs", styleAndScript["course"]);
});

app.get("/faqs", (req, res) => {
    res.render("faqs.ejs", styleAndScript["faqs"]);
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs", styleAndScript["contact"]);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});     