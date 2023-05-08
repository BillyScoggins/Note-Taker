
const express = require("express");

const path = require("path");

const fs = require ("fs");
const { get } = require("http");
const { notStrictEqual } = require("assert");

const app = express ();

const uuid = require('./helpers/uuid');

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(express.static("public"));

app.get('/notes', (req, res) =>
 res.sendFile(path.join(__dirname,  "public/notes.html"))
 );

 app.get(" * " , (req, res) =>
 res.sendFile(path.join(__dirname,  "public/index.html"))
 )
 app.listen (PORT, () =>
 console.log (`Example app listening at http://localhost:${PORT}`)
    
    )

    app.get('/api/notes', (req, res ) => {
        res.json (`${req.method} request received to get api`);

        console.info(`${req.method} request received to get notes`);
    }

        )

    
    