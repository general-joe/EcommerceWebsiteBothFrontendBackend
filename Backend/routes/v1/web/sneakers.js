const { Router } = require("express");
const router = Router();
const sneakers = require("../../../controllers/sneakers")

router.post("/save", sneakers.addSneakers)
router.get("/list", sneakers.getSneakers)
router.get("/:id", sneakers.getSneakersById)
router.patch("/:id", sneakers.editSneakers)
router.delete("/:id", sneakers.removeSneakers)



module.exports = router;