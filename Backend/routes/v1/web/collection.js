const { Router } = require("express");
const router = Router();
const collection = require("../../../controllers/collection");
const upload = require("../../../utils/multerUtil");

router.post("/save", upload.single("image"), collection.saveCollection)
router.get("/list", collection.getCollection)
router.get("/:id", collection.getSingleCollection)
router.patch("/:id", collection.editCollection)
router.delete("/:id", collection.removeCollection)

module.exports = router;