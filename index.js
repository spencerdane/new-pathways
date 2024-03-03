import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const styleAndScript = {
    about: {style: "about", script: "about"},
    contact: {style: "contact", script: "contact"},
    course: {style: "course", script: "course"},
    faqs: {style: "faqs", script: "faqs"},
    index: {style: "index", script: "index"},
    origins: {style: "origins", script: "origins"},
    practitioner: {style: "practitioner", script: "practitioner"}
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", styleAndScript["index"]);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});     