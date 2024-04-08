const { Router } = require("express");
const router = Router();
const collection = require("../../../controllers/collection");

router.post("/save", collection.saveCollection)
router.get("/list", collection.getCollection)
router.get("/:id", collection.getCollectionById)
router.patch("/:id", collection.updateCollection)
router.delete("/:id", collection.deleteCollection)

module.exports = router;