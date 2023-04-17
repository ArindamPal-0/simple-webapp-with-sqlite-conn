const path = require("path");
const process = require("process");
const express = require("express");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
const PORT = 3000;



app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api", (req, res) => {
    res.send({ msg: "Hello, World!" });
});

app.get("/api/stories", async (req, res) => {

    const {title} = req.query;

    const db = await open({
        filename: "database.db",
        driver: sqlite3.Database,
    });

    const response = {};

    if(title) {
        const result = await db.get(`SELECT * FROM stories WHERE title = ?`, title);
        response.story = result;

    } else {
        const result = await db.all(`SELECT * FROM stories`);
        response.stories = result;
    }
    await db.close()

    res.json(response);

});

app.listen(PORT, () => {
    console.log(`⚡ listening at http://127.0.0.1:${PORT}`);
});
