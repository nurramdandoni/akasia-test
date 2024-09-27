require("dotenv").config();
const { Sequelize } = require("sequelize");

let statusLog = false;
if(process.env.SQL_LOGGING == "true"){
  statusLog = true;
  console.log("true");
  console.log(statusLog);
}
// Inisialisasi koneksi ke database akasia
const sequelizeAkasia = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: statusLog, // Menonaktifkan log query SQL
  }
);
// Cek koneksi ke database
sequelizeAkasia
  .authenticate()
  .then(() => {
    console.log("Terhubung ke Database Akasia.");
  })
  .catch((error) => {
    console.error("Gagal Terhubung Ke Database Akasia", error);
  });

  module.exports = { sequelizeAkasia };
