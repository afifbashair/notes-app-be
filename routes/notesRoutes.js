const express = require('express');
const router = express.Router();
const controller = require('../controllers/notesController');

router.get('/', controller.getNotes);
router.post('/', controller.addNote);
router.put('/:id', controller.editNote);
router.delete('/:id', controller.removeNote);

router.get('/', (req, res) => {
  console.log('HIT /notes');
  res.send('OK');
});

module.exports = router;

