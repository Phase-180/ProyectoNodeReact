// authorController.js
const authorService = require("../services/authorService");
const Respuesta = require("../utils/respuesta");

class AuthorController {
  async getAllAuthor(req, res) {
    // Implementa la lógica para obtener todos los datos
    authorService.getAllAuthor((err, data) => {
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
        res.json(Respuesta.exito(data, "Datos de autores recuperados"));
      }
    });
  }
  async getAllAuthorBooks(req, res) {
    // Implementa la lógica para obtener todos los datos
    authorService.getAllAuthorBooks((err, data) => {
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
        res.json(Respuesta.exito(data, "Datos de autores recuperados"));
      }
    });
  }

  async getAuthorByBookId(req, res) {
    const bookId = req.params.id;

    authorService.getAuthorByBookId(bookId, (err, author) => {
      if (err) {
        res
          .status(500)
          .json(
            Respuesta.error(
              author,
              "Error al recuperar los datos:" + req.originalUrl
            )
          );
      } else if (author == null) {
        res
          .status(404)
          .json(Respuesta.error(author, "Book no encontrado: " + bookId));
      } else {
        res.json(Respuesta.exito(author, "Book recuperado"));
      }
    });
  }

  async getAuthorById(req, res) {
    // Implementa la lógica para obtener un dato por ID
  }

  async createAuthor(req, res) {
    // Implementa la lógica para crear un nuevo dato
    // Recuperar objeto con el book a dar de alta
    const authorData = req.body;

    authorService.createAuthor(authorData, (err, result) => {
      if (err) {
        res
          .status(500)
          .json(
            Respuesta.error(
              result,
              "Error al insertar el autor:" + req.originalUrl
            )
          );
      } else {
        // 201: Created
        res
          .status(201)
          .json(
            Respuesta.exito({ insertId: result.insertId }, "Autor dado de alta")
          );
      }
    });
  }

  async updateAuthor(req, res) {
    const body = req.body;

    authorService.putAuthor(body, (err, data) => {
      if (err) {
        res
          .status(500)
          .json(
            Respuesta.error(
              data,
              "Error actualizar datos del autor:" + req.originalUrl
            )
          );
      } else {
        res.json(Respuesta.exito(data, "Datos del autor actualizados"));
      }
    });
  }

  async deleteAuthor(req, res) {
    // Implementa la lógica para eliminar un dato por ID
    // Recuperar información que vienen en la ruta '/:id'
    const authorId = req.params.id;
    // Implementa la lógica para eliminar el book
    authorService.deleteAuthor(authorId, (err, result) => {
      if (err) {
        console.error("Error al eliminar el autor:", err);
        res.status(500).json({ error: "Error interno del servidor" });
        // } else if (result === 0) {
        //     res.status(404).json({ error: 'Book no encontrado' });
      } else {
        res.status(204).end(); // 204: No Content
      }
    });
  } // Implementa la lógica para eliminar un dato por ID
}

module.exports = new AuthorController();
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
