const { Router } = require("express");
const route = Router();
const client = require("./client");
const collection = require("./collection");
const order = require("./order");
const sneakers = require("./sneakers");
const clothes = require("./clothes");
const delivery = require("./delivery");

route.use("/client", client);
route.use("/collection", collection);
route.use("/delivery", delivery);
route.use("clothes", clothes);
route.use("order", order);
route.use("sneakers", sneakers);



module.exports = route;
