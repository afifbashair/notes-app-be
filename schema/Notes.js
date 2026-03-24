const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notes = sequelize.define('notes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  judul: DataTypes.STRING,
  isi: DataTypes.TEXT,
  tanggal_dibuat: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

module.exports = Notes;