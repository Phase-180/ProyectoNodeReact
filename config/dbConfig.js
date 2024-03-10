// config/dbConfig.js
const mysql = require("mysql2");

const dbConfig = {
  host: "db",
  user: "root",
  password: "test",
  database: "bdlibreria",
  port: 3307,
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

module.exports = db;
