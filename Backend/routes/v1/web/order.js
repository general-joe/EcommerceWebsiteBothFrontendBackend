const { Router } = require("express");
const router = Router();

const order = require("../../../controllers/order")

router.post("/save", order.createOrder)
router.get("/list", order.getAllOrders)
router.get("/:id", order.getSingleOrder)
router.patch("/:id", order.patchOrder)
router.delete("/:id", order.deleteOrder)


module.exports = router;
