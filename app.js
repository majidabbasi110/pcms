const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();
// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const connectDB = require("./connect.js")

// app
const app = express();

// db
<<<<<<< HEAD
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected"));
=======

connectDB();

>>>>>>> 4509bb0db1c59af045dceb53fd9cefde617fa2c2

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
