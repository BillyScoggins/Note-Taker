
const express = require("express");

const path = require("path");

const fs = require("fs");
const { get } = require("http");
const { notStrictEqual } = require("assert");

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.get(" * ", (req, res) =>
    res.sendFile(path.join(__dirname, "public/index.html"))
)
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)

)

app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received to get api`);

    console.info(`${req.method} request received to get notes`);
}

)
app.post('/api/reviews', (req, res) => {

    console.info(`${req.method} request received to add a note`);
})

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);





app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
});
