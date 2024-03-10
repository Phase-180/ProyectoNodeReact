// Ejemplo en bookModel.js
const db = require("../config/dbConfig");
const { logErrorSQL, logMensaje } = require("../utils/logger");

class BookModel {
  getAllBook(callback) {
    const query = "SELECT * FROM books";
    db.query(query, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  getBookByWriterId(writerId, callback) {
    const query = `SELECT * FROM books WHERE booksIdAutor = ${writerId}`;
    db.query(query, (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  // getAllBookListado(callback) {
  //   const query =
  //     "SELECT c.*, t.author, t.descripcion as author_descripcion FROM book c JOIN author t ON c.idauthor = t.idauthor";
  //   db.query(query, (err, result) => {
  //     if (err) {
  //       logErrorSQL(err);
  //       callback(err, null);
  //     } else {
  //       callback(null, result);
  //     }
  //   });
  // }

  async createBook(bookData, callback) {
    // Atencion, idbook es PK y es Auto Incremental, se pone como null
    const query =
      "INSERT INTO books (bookId, bookTitle, bookPublished, booksIdAutor) VALUES (?, ?, ?, ?)";
    const values = [
      bookData.bookId,
      bookData.bookTitle,
      bookData.bookPublished,
      bookData.bookIdAutor,
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

  async updateBook(bookData, callback) {
    // Atencion, idbook es PK y es Auto Incremental, se pone como null
    // const query =
    //   "INSERT INTO books (bookId, bookTitle, bookPublished, booksIdAutor) VALUES (?, ?, ?, ?)";
    const query =
      "UPDATE books SET  bookTitle=?, bookPublished=?, booksIdAutor=? WHERE bookId=?";
    const values = [
      bookData.bookTitle,
      bookData.bookPublished,
      bookData.bookIdAutor,
      bookData.bookId,
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
  getBookById(bookId, callback) {
    const query = "SELECT * FROM books WHERE bookId = ?";
    db.query(query, [bookId], (err, result) => {
      if (err) {
        logErrorSQL(err);
        callback(err, null);
      } else if (result.length === 0) {
        callback(null, null);
      } else {
        const book = result[0];
        callback(null, book);
      }
    });
  }

  // getBookByIdRelations(bookId, callback) {
  //   const query =
  //     "SELECT c.*,t.author,t.descripcion as authordesc FROM book as c, author as t WHERE c.idauthor = t.idauthor AND idbook = ?";
  //   db.query(query, [bookId], (err, result) => {
  //     if (err) {
  //       logErrorSQL(err);
  //       callback(err, null);
  //     } else if (result.length === 0) {
  //       callback(null, null);
  //     } else {
  //       const book = result[0];
  //       callback(null, book);
  //     }
  //   });
  // }

  deleteBook(bookId, callback) {
    const query = "DELETE FROM books WHERE bookId = ?";
    db.query(query, [bookId], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  }

  // Otros métodos del modelo...
}

module.exports = new BookModel();

// Estructura de result (mysql)
// {
//   fieldCount: 0,
//   affectedRows: 1, // Número de filas afectadas por la consulta
//   insertId: 1,    // ID generado por la operación de inserción
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0  // Número de filas cambiadas por la consulta
// }
