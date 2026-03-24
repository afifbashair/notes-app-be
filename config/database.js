const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
      // Pertemuan 2
      // logging: false,
      // Pertemuan 3: Jika menggunakan Cloud SQL, tambahkan opsi SSL
      ssl: {
        
        rejectUnauthorized: false,
      },
    },
  }
);
console.log('USER:', process.env.DB_USER);
console.log('PASS:', process.env.DB_PASS);
module.exports = sequelize;
