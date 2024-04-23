const { Router } = require("express");
const route = Router();
const client = require("./client");
const collection = require("./collection");
const order = require("./order");
const clothes = require("./clothes");
const delivery = require("./delivery");

route.use("/client", client);
route.use("/collection", collection);
route.use("/delivery", delivery);
route.use("/clothes", clothes);
route.use("/order", order);




module.exports = route;
