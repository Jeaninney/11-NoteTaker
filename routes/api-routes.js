const dbjson = require("../db/db.json");
const fs = require("fs");

let noteId;

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(dbjson);
  });

  app.post("/api/notes", function (req, res) {
    
    // if db.json is empty, it sets the first noteID to 1
    if (dbjson.length < 1) {
      noteId = 1;
    } else {
      // if db.json is not empty, then it sets the note ID to the highest noteID +1
      noteId = parseInt(dbjson[dbjson.length - 1].id) + 1;
    }
    // sets the id of the note
    req.body.id = noteId;

    var notes = req.body;
    dbjson.push(notes);

    fs.writeFile("./db/db.json", JSON.stringify(dbjson), function (err) {
      if (err) throw (err);
    })
    res.json(dbjson);
  });

  app.delete("/api/notes/:id", function (req, res) {
    const id = parseInt(req.params.id);
    for (var i = 0; i < dbjson.length; i++) {
      if (dbjson[i].id === id) {
        dbjson.splice(i, 1);
      }
    }
    fs.writeFile("./db/db.json", JSON.stringify(dbjson), function (err) {
      if (err) throw (err);
    })

    res.json(dbjson);
  });
};