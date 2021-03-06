// server/index.js

const express = require("express");
const fs = require("fs");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "abc123de45"
});

con.connect(function(err) {
    if (err) throw err;
});

const newPet = {
    "pet4" : {
        "name" : "nala",
        "type" : "dog",
        "owner" : "eldercesar",
        "color" : "salt and peper",
        "id" : 4
    }
}

const newPet2 = {
    "pet3" : {
        "name" : "kream",
        "type" : "dog",
        "owner" : "tobs",
        "color" : "yorkie color",
        "id" : 3
    }
}

var id = 1;

app.get("/api", (req, res) => {
    res.json({message: "Hello from server side!" });
});

app.get("/pets", (req, res) => {
    con.query("SELECT * FROM empresa.departamentos", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.end( JSON.stringify(result));
    });
});


app.post("/addPet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse( data );
        data["pet3"] = newPet2["pet3"];
        fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify( data ), (err) => {
            if (err) throw err;
        });
        console.log( data );
        res.end( JSON.stringify( data ) );
    });
});

app.post("/addPet2", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse( data );
        data["pet4"] = newPet["pet4"];
        fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify( data ), (err) => {
            if (err) throw err;
        });
        console.log( data );
        res.end( JSON.stringify( data ) );
    });
});

app.put("/modifyPet1" , (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse( data );
        newPet.pet4["id"] = 5;
        data["pet4"] = newPet["pet4"];
        fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify( data ), (err) => {
            if (err) throw err;
        });
        console.log( data );
        res.end( JSON.stringify( data ) );
    });
})

app.delete("/deletePet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse( data );
        delete data["pet1"];
        fs.writeFile(__dirname + "/" + "pets.json", JSON.stringify( data ), (err) => {
            if (err) throw err;
        });
        console.log( data );
        res.end( JSON.stringify( data ) );
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});