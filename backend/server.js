require("dotenv").config();
const express = require("express");

const port = process.env.APP_PORT;

const app = express();
// unutk cek koneksi database saja
// const { sequelizeErekrut } = require("./db");

app.get("/", (req, res) => {
  res.status(200).json({ status: "Sukses", message: "API Ready" });
});

const server = app.listen(port, "0.0.0.0", () => {
    console.log("server running");
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server berjalan pada host ${host} dan port ${port}`);
});
