const express = require("express");

const app = express();

const fs = require("fs")

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    fs.readdir(`./uploads`, { withFileTypes: true }, (err, files) => {
        res.render("notes", { files: files });
    });
});

app.get('/new', (req, res) => {                            
    res.render("new");
});


app.get("/newbanoa", (req, res) => {
    fs.writeFile(`./uploads/${req.query.fileName}`, req.query.fileData, function (err) {
        if (err) throw err
        else res.redirect("/")
    })
});

app.get("/show/:filename", function (req, res) {
    fs.readFile(`./uploads/${req.params.filename}`, "utf-8", function (err, data) {
        res.send(data);
    })
});



app.get("/delete/:filename", function(req, res) {
    fs.unlink(`./uploads/${req.params.filename}`, function(err) {
        if(err) throw err
        else res.redirect("/");
    });
});

app.listen(5000, () => {
    console.log("Server started");
});                               
