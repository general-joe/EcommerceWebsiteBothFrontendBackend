const { Router } = require("express");
const router = Router();
const collection = require("../../../controllers/collection");


router.post("/save",  collection.saveCollection)
router.get("/list", collection.getCollection)
router.get("/:id", collection.getSingleCollection)
router.patch("/:id", collection.editCollection)
router.delete("/:id", collection.removeCollection)

module.exports = router;