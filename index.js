const express = require("express");
const mongoose = require("mongoose");

const morgan = require("morgan");

const cors = require("cors");
const user = require("./routes/user");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));

app.use(express.json({ limit: "200mb", extended: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", user);

app.post("/save-products", (req, res) => {
  console.log(req.body, "products received");
  res.json({
    message: "received",
  });
});

const port = process.env.PORT || 8000;

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    // console.log(res);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Mongo success daze");
  })
  .catch((err) => {
    console.log(err);
  });
