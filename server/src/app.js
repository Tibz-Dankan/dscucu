const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailController = require("./controllers/emailController");

dotenv.config();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(cors({ origin: process.env.PRODUCTION_URL }));
} else {
  app.use(cors());
}

// email controller
app.use("/api", emailController);

const port = 8000 || process.env.PORT;
// start a nodejs server
app.listen(port, () =>
  console.log(`server started and running on port ${port}...`)
);
