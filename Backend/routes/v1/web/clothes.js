const { Router } = require("express");
const router = Router();

const clothes = require("../../../controllers/clothes")

router.post("/save", clothes.saveClothes)
router.get("/list", clothes.getClothes)
router.get("/:id", clothes.getsingleClothe)
router.patch("/:id", clothes.updateClothe)
router.delete("/:id", clothes.removeClothe)

module.exports = router;