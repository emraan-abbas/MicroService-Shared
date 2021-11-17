const api_helper = require("../API_helper");

exports.getAllNotes = (req, res) => {
  api_helper.GetAllNotes(process.env.GET_ALL_NOTES)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.createNote = (req, res) => {
    api_helper.createNote(req.body,process.env.CREATE_NOTE)
    .then((response) => {
      res.json(response, result);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.getNoteByID = (req, res) => {
    api_helper.GetAllNotes(process.env.GET_NOTE_BY_ID)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.updateNote = (req, res) => {
    api_helper.updateNote(process.env.EDIT_NOTE)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
  };

exports.deleteNote = (req, res) => {
    api_helper.deleteNote(process.env.DELETE_NOTE)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
};

