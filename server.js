const http = require('http');
const express = require("express");
const cors = require("cors");
const hostname = '127.0.0.1';
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());

    // Pick up React index.html file
    this.app.use(
      express.static(path.join(__dirname, "./front/build"))
    );
  }
  routes() {
    this.app.get("*", (req, res) => {
      res.sendFile(
        path.join(__dirname, "./front/build/index.html")
      );
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: ", this.port);
    });
  }
}

module.exports = Server;