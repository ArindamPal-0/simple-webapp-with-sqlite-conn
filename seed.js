const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function main() {
    const db = await open({
        filename: "database.db",
        driver: sqlite3.Database,
    });

    const tableName = "stories";

    await db.run(
        `CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT PRIMARY KEY,
        title TEXT NOT NULL
      );`
    );

    const stories = ["story 1", "story 2", "story 3"];

    for (let i = 0; i < stories.length; i++) {
        const result = await db.get(
            `SELECT * FROM ${tableName} WHERE title = ? AND id = ?`,
            [stories[i], i]
        );

        if (!result) {
            console.log(stories[i]);
            await db.run(
                `INSERT INTO ${tableName} (id, title) VALUES (?, ?);`,
                [i, stories[i]]
            );
        }
    }

    const result = await db.all(`SELECT * FROM ${tableName}`);
    console.log(result);

    await db.close();
}

main().catch((err) => console.error(err));
