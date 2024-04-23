const { Router } = require("express");
const router = Router();
const delivery = require("../../../controllers/delivery");

router.post("/save", delivery.saveDeliveryInfo)
router.get("/list", delivery.getDeliveries)
router.get("/:id", delivery.getSingleDelivery)
router.patch("/:id", delivery.edit_delivery)
router.delete("/:id", delivery.removeDelivery)



module.exports = router;