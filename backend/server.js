require("dotenv").config();
const express = require("express");

const port = process.env.APP_PORT;

const app = express();
app.use(express.json());
// unutk cek koneksi database saja
// const { sequelizeErekrut } = require("./db");

const activity = require("./controller/activityController");
const user = require("./controller/userController");

app.get("/", (req, res) => {
  res.status(200).json({ status: "Sukses", message: "API Ready" });
});
app.post("/login", user.cekUser);
app.post("/activity", activity.createActivity);
app.put("/activity", activity.updateActivity);

const server = app.listen(port, "0.0.0.0", () => {
  console.log("server running");
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server berjalan pada host ${host} dan port ${port}`);
});
