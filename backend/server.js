require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "Sukses", message: "API Ready" });
});

const server = app.listen(8081, "0.0.0.0", () => {
    console.log("server running");
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log(`Server berjalan pada host ${host} dan port ${port}`);
});
