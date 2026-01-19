const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./database.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS wardens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    staffNumber TEXT,
    firstName TEXT,
    lastName TEXT,
    location TEXT,
    timestamp TEXT
  )
`);

app.get("/wardens", (req, res) => {
  db.all("SELECT * FROM wardens", [], (err, rows) => {
    res.json(rows);
  });
});

app.post("/wardens", (req, res) => {
  const { staffNumber, firstName, lastName, location } = req.body;
  const timestamp = new Date().toISOString();

  db.run(
    `INSERT INTO wardens (staffNumber, firstName, lastName, location, timestamp)
     VALUES (?, ?, ?, ?, ?)`,
    [staffNumber, firstName, lastName, location, timestamp],
    function () {
      res.json({ id: this.lastID });
    }
  );
});

app.put("/wardens/:id", (req, res) => {
  const { staffNumber, firstName, lastName, location } = req.body;

  db.run(
    `UPDATE wardens SET staffNumber=?, firstName=?, lastName=?, location=? WHERE id=?`,
    [staffNumber, firstName, lastName, location, req.params.id],
    () => res.json({ success: true })
  );
});

app.delete("/wardens/:id", (req, res) => {
  db.run(`DELETE FROM wardens WHERE id=?`, [req.params.id], () => {
    res.json({ success: true });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));