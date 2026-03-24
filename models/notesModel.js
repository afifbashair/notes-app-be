const Notes = require('../schema/Notes');

const getAllNotes = async () => {
  return await Notes.findAll({
    order: [['id', 'DESC']]
  });
};

const createNote = async (data) => {
  return await Notes.create({
    judul: data.judul,
    isi: data.isi
  });
};

const updateNote = async (id, data) => {
  return await Notes.update(
    {
      judul: data.judul,
      isi: data.isi
    },
    {
      where: { id }
    }
  );
};

const deleteNote = async (id) => {
  return await Notes.destroy({
    where: { id }
  });
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote
};