// bookController.js
const bookService = require("../services/bookService");
const { logMensaje } = require("../utils/logger");
const Respuesta = require("../utils/respuesta");

class BookController {
  async getAllBook(req, res) {
    // Recuperar información de los parámetros de la petición
    const { listado } = req.query;

    // Si se trata de un listado (existe el parámetro listado), invoco otro servicio
    if (listado) {
      bookService.getAllBookListado((err, data) => {
        if (err) {
          res
            .status(500)
            .json(
              Respuesta.error(
                data,
                "Error al recuperar los datos:" + req.originalUrl
              )
            );
        } else {
          res.json(Respuesta.exito(data, "Listado de books recuperado"));
        }
      });
    } else {
      // No se trata de un listado
      // Implementa la lógica para obtener todos los datos
      bookService.getAllBook((err, data) => {
        if (err) {
          res
            .status(500)
            .json(
              Respuesta.error(
                data,
                "Error al recuperar los datos:" + req.originalUrl
              )
            );
        } else {
          res.json(Respuesta.exito(data, "Datos de books recuperados"));
        }
      });
    }
  }

  async getBookById(req, res) {
    // Implementa la lógica para obtener un dato por ID
    // Recuperar información de los parámetros de la petición
    const { relations } = req.query;
    // Recuperar información que vienen en la ruta '/:id'
    const bookId = req.params.id;

    // Si hay que recuperar los datos relacionados (relations), invoco otro servicio
    if (relations) {
      bookService.getBookByIdRelations(bookId, (err, book) => {
        if (err) {
          res
            .status(500)
            .json(
              Respuesta.error(
                book,
                "Error al recuperar los datos:" + req.originalUrl
              )
            );
        } else if (book == null) {
          logMensaje(
            "Respuesta es:" +
              JSON.stringify(
                Respuesta.error(book, "Book no encontrado" + req.originalUrl)
              )
          );
          res
            .status(404)
            .json(Respuesta.error(book, "Book no encontrado: " + bookId));
        } else {
          res.json(Respuesta.exito(book, "Book recuperado"));
        }
      });
    } else {
      // No necesito recuperar datos relacionados

      // Implementa la lógica para obtener el book
      bookService.getBookById(bookId, (err, book) => {
        if (err) {
          res
            .status(500)
            .json(
              Respuesta.error(
                book,
                "Error al recuperar los datos:" + req.originalUrl
              )
            );
        } else if (book == null) {
          res
            .status(404)
            .json(Respuesta.error(book, "Book no encontrado: " + bookId));
        } else {
          res.json(Respuesta.exito(book, "Book recuperado"));
        }
      });
    }
  }

  async createBook(req, res) {
    // Implementa la lógica para crear un nuevo dato

    // Recuperar objeto con el book a dar de alta
    const bookData = req.body;

    bookService.createBook(bookData, (err, result) => {
      if (err) {
        res
          .status(500)
          .json(
            Respuesta.error(
              result,
              "Error al insertar el book:" + req.originalUrl
            )
          );
      } else {
        // 201: Created
        res
          .status(201)
          .json(
            Respuesta.exito({ insertId: result.insertId }, "Book dado de alta")
          );
      }
    });
  }

  async updateBook(req, res) {
    const body = req.body;

    bookService.putBook(body, (err, data) => {
      if (err) {
        res
          .status(500)
          .json(
            Respuesta.error(data, "Error actualizar datos:" + req.originalUrl)
          );
      } else {
        res.json(Respuesta.exito(data, "Datos actualizados"));
      }
    });

    // Implementa la lógica para actualizar un dato por ID
  }

  async deleteBook(req, res) {
    // Implementa la lógica para eliminar un dato por ID
    // Recuperar información que vienen en la ruta '/:id'
    const bookId = req.params.id;
    // Implementa la lógica para eliminar el book
    bookService.deleteBook(bookId, (err, result) => {
      if (err) {
        console.error("Error al eliminar book:", err);
        res.status(500).json({ error: "Error interno del servidor" });
        // } else if (result === 0) {
        //     res.status(404).json({ error: 'Book no encontrado' });
      } else {
        res.status(204).end(); // 204: No Content
      }
    });
  }

  async getBookByWriterId(req, res) {
    const writerId = req.params.id;

    bookService.getBookByWriterId(writerId, (err, book) => {
      if (err) {
        res
          .status(500)
          .json(
            Respuesta.error(
              book,
              "Error al recuperar los datos:" + req.originalUrl
            )
          );
      } else if (book == null) {
        res
          .status(404)
          .json(Respuesta.error(book, "Book no encontrado: " + writerId));
      } else {
        res.json(Respuesta.exito(book, "Book recuperado"));
      }
    });
  }
}

module.exports = new BookController();
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
