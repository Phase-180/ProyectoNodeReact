// Ejemplo en authorModel.js
const db = require("../config/dbConfig");
const { logErrorSQL } = require("../utils/logger");

class AuthorModel {
  getAllAuthor(callback) {
    const query = "SELECT * FROM author";
    console.log(query);
    db.query(query, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
  getAllAuthorBooks(callback) {
    const query =
      "SELECT author.authorNname as name, COUNT(books.booksIdAutor) as num FROM author INNER JOIN books ON author.authorId = books.booksIdAutor GROUP BY author.authorId";

    console.log(query);
    db.query(query, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
  async createAuthor(authorData, callback) {
    // Atencion, idbook es PK y es Auto Incremental, se pone como null

    const query =
      "INSERT INTO author (authorId, authorNname,authorBirhdate, authorPremio, authorNacionalidad) VALUES (?, ?,?, ?, ?)";
    const values = [
      authorData._authorId,
      authorData._authorNname,
      authorData._authorBirhdate,
      authorData._authorPremio,
      authorData._authorNacionalidad,
    ];

    const result = db.query(query, values, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  getAuthorByBookId(authorId, callback) {
    const query = `SELECT * FROM author WHERE authorId  = (SELECT booksIdAutor FROM books WHERE bookId = ${authorId})`;
    db.query(query, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
  async updateAuthor(authorData, callback) {
    const query =
      "UPDATE author SET  authorNname = ?, authorBirhdate = ?, authorPremio = ? ,authorNacionalidad = ? WHERE authorId = ?";
    const values = [
      authorData._authorNname,
      authorData._authorBirhdate,
      authorData._authorPremio,
      authorData._authorNacionalidad,
      authorData._authorId,
    ];

    const result = db.query(query, values, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  deleteAuthor(authorId, callback) {
    const query = "DELETE FROM author WHERE authorId  = ?";
    db.query(query, [authorId], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }
}

module.exports = new AuthorModel();
