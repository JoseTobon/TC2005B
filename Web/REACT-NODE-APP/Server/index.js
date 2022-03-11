// server/index.js

const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

const newPet = {
    "pet4" : {
        "name" : "nala",
        "type" : "dog",
        "owner" : "eldercesar",
        "color" : "salt and peper",
        "id" : 4
    }
}

app.get("/api", (req, res) => {
    res.json({message: "Hello from server side!" });
});

app.get("/pets", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        console.log( data );
        res.end( data );
    });
});

app.post("/addPet", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (req, res) => {
        data = JSON.parse( data );
        data["pet4"] = newPet["pet4"];
        console.log( data );
        res.end( JSON.stringify( data ) );
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});