var dbjson = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(dbjson);
    return dbjson;
  });

  app.post("/api/notes", function(req, res) {
      var notes = req.body;
      console.log(notes);
      return notes;
  });

  app.delete("/api/notes:id", function(req, res) {

  });
};