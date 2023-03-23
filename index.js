const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin-api");
const router = require("./routes/api");

const app = express();
const PORT = 8081;

const MONGO_CONNECTION_STRING =
  "mongodb+srv://Battulga-Ishjamts:Tulgaa3770@tulgaa-mongodb.lsh1crh.mongodb.net/day82";

app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/router", router);

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully "))
    .catch((error) => console.log("error"));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
