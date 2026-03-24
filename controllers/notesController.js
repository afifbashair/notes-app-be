const notesModel = require('../models/notesModel');

const getNotes = async (req, res) => {
  try {
    const result = await notesModel.getAllNotes();
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addNote = async (req, res) => {
  try {
    await notesModel.createNote(req.body);
    res.json({ message: 'Note added' });
  } catch (err) {
    res.status(500).json(err);
  }
};

const editNote = async (req, res) => {
  try {
    await notesModel.updateNote(req.params.id, req.body);
    res.json({ message: 'Note updated' });
  } catch (err) {
    res.status(500).json(err);
  }
};

const removeNote = async (req, res) => {
  try {
    await notesModel.deleteNote(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getNotes,
  addNote,
  editNote,
  removeNote
};