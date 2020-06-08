const dbjson = require("../db/db.json");
const fs = require("fs");
let id = dbjson.length + 1;

module.exports = function (app) {

  app.get("/api/notes", function (req, res) {
    res.json(dbjson);
  });

  app.post("/api/notes", function (req, res) {
    req.body.id = id++;
    var notes = req.body;
    console.log(notes);
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
    fs.writeFile("./db/db.json", JSON.stringify(dbjson), function (err){
      if (err) throw (err);
    })

    res.json(dbjson);
  });
};