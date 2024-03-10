// Ejemplo en dataService.js
const bookModel = require("../models/bookModel");
const { logMensaje } = require("../utils/logger");

class BookService {
  getAllBook(callback) {
    bookModel.getAllBook((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }

  getAllBookListado(callback) {
    bookModel.getAllBookListado((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }

  async createBook(bookData, callback) {
    // Aquí podrías realizar validaciones adicionales antes de llamar al modelo
    // Por ejemplo, verificar si los datos son válidos antes de intentar crear el book

    bookModel.createBook(bookData, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  async getBookById(bookId, callback) {
    bookModel.getBookById(bookId, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  async getBookByWriterId(writerId, callback) {
    bookModel.getBookByWriterId(writerId, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
  async putBook(book, callback) {
    bookModel.updateBook(book, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  async getBookByIdRelations(bookId, callback) {
    bookModel.getBookByIdRelations(bookId, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  deleteBook(bookId, callback) {
    bookModel.deleteBook(bookId, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result.affectedRows); // Número de filas afectadas
      }
    });
  }

  // Otros métodos del servicio...
}

module.exports = new BookService();
