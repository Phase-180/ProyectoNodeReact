// authorService.js
const authorModel = require("../models/authorModel");

class AuthorService {
  getAllAuthor(callback) {
    authorModel.getAllAuthor((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
  getAllAuthorBooks(callback) {
    authorModel.getAllAuthorBooks((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
  async createAuthor(authorData, callback) {
    // Aquí podrías realizar validaciones adicionales antes de llamar al modelo
    // Por ejemplo, verificar si los datos son válidos antes de intentar crear el book

    authorModel.createAuthor(authorData, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  async getAuthorByBookId(authorId, callback) {
    authorModel.getAuthorByBookId(authorId, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
  async putAuthor(authorData, callback) {
    authorModel.updateAuthor(authorData, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  deleteAuthor(authorId, callback) {
    authorModel.deleteAuthor(authorId, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result.affectedRows); // Número de filas afectadas
      }
    });
  }
}
module.exports = new AuthorService();
