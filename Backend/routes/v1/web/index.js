const { Router } = require("express");
const route = Router();
const client = require("./client");
const collection = require("./collection");
route.use("/client", client);
route.use("/collection", collection);

module.exports = route;
