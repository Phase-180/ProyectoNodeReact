// bookRoutes.js
const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

//api/books
router.get("/", bookController.getAllBook);
//api/books/1
router.get("/:id", bookController.getBookById);
//api/books/getBooksByWritter/1
router.get("/getBooksByWriter/:id", bookController.getBookByWriterId);
//api/books
router.post("/", bookController.createBook);
//api/books/1
router.put("/:id", bookController.updateBook);
//api/books/1
router.delete("/:id", bookController.deleteBook);

module.exports = router;
