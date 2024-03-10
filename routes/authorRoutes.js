// authorRoutes.js
const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");

router.get("/", authorController.getAllAuthor);
router.get("/librosdeautor", authorController.getAllAuthorBooks);
router.get("/:id", authorController.getAuthorById);
router.post("/", authorController.createAuthor);
router.get("/getAuthorByBook/:id", authorController.getAuthorByBookId);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
