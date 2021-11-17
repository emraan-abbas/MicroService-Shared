const express = require ("express");
const router = express.Router();

const controller = require("../Controller/controller");


router.get ('/get-all-notes', controller.getAllNotes)
router.get ('/creat-note', controller.createNote)
router.get ('/get-note-by-id/:noteID', controller.getNoteByID)
router.get ('/update-note/:noteID', controller.updateNote)
router.get ('/delete-note/:noteID', controller.deleteNote)


module.exports = router;
