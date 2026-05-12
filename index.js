const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

const notesRoutes = require('./routes/notesRoutes');

const createNotesTable = require('./schema/Notes');
// createNotesTable();

app.use('/notes', notesRoutes);

app.get('/', (req, res) => {
  res.send('API Notes jalan 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port ${PORT}');
});