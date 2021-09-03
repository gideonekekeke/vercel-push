require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 80;
const cors = require("cors");

const callRoute = require("./Router");
const url =
  "mongodb+srv://shotkode:shotkode@cluster0.2kfdg.mongodb.net/RomanusDB?retryWrites=true&w=majority";

const app = express();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("successfully connected");
  });

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("server is been ready");
// });
app.use("/", callRoute);
app.use(cors());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// try {
//   functionThatMightThrow();
// } catch (error) {
//   notifyUserOfError(error);
//   reportErrorToService(error);
// }
