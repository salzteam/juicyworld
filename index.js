require("dotenv").config();
const express = require("express");
const mainRouter = require("./src/routes/main");
const morgan = require("morgan");
const server = express();
const { PORT } = process.env;

server.use(express.static("./public"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
server.use(mainRouter);
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
