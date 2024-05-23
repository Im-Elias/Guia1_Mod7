// EJ-1: Construir un string de conexión
// usuario:123456@127.0.0.1:5432/usuarios

// EJ-2: Construir un objeto de configuración
const config = {
  user: "usuario",
  password: "123456",
  host: "127.0.0.1",
  port: "5432",
  database: "usuarios",
};

// EJ-3: Desarrollar una aplicación con Node que al ser ejecutada llame a una función asíncrona para ejecutar una consulta a PostgreSQL que ingrese 1 registro en la tabla usuarios
import pool from "./model/config.js";

const insert = async () => {
  const sql = {
    text: "INSERT INTO usuarios (nombre, telefono) VALUES ($1, $2) RETURNING *",
    values: ["Juan", 123456],
  };

  const result = await pool.query(sql);

  console.log("Se inserto el registro: ", result.rows);
};

// EJ-4
//Ingrese otro registro en la tabla usuarios.

const insert2 = async () => {
  const sql2 = {
    text: "INSERT INTO usuarios (nombre, telefono) VALUES ($1, $2) RETURNING *",
    values: ["Pedro", 234567],
  };
  const result = await pool.query(sql2);

  console.log(`Se inserto el registro: `, result.rows);
};

//Consulte todos los registros de la tabla usuarios.

const consulta = async () => {
  const sql3 = {
    text: "SELECT * FROM usuarios ORDER BY id",
  };
  const result = await pool.query(sql3);

  console.log("Registros: ", result.rows);
};

//Consulte solo el registro de id 1.

const consulta2 = async () => {
  const sql4 = {
    text: "SELECT * FROM usuarios WHERE id = $1",
    values: [1],
  };
  const result = await pool.query(sql4);

  console.log(`Se consulto el resgistro de id 1: `, result.rows);
};

// EJ-5

const update = async () => {
  const sql5 = {
    text: "UPDATE usuarios SET telefono = $1 WHERE id = $2 RETURNING *",
    values: [914215468, 1],
  };
  const result = await pool.query(sql5);

  console.log(`Se actualizo el registro de id 1: `, result.rows);
};

// EJ-6
//consulta que elimine todos los registros de la tabla usuarios e imprima en consola la cantidad de registros eliminados.

const deleteAll = async () => {
  const sql6 = {
    text: "DELETE FROM usuarios",
  };

  const result = await pool.query(sql6);
  console.log(`Se eliminaron ${result.rowCount} registros`);
};

//EJ-7
const insert3 = async () => {
  const sql7 = {
    text: "INSERT INTO usuarios (id,nombre, telefono) VALUES ($1, $2, $3) RETURNING *",
    values: [5, "Pedro", 234567],
  };

  const result = await pool.query(sql7);
  console.log(`Se inserto el registro de id 5: `, result.rows);
};

//EJ-8
const consulta3 = async () => {
  const sql8 = {
    text: "SELECT * FROM usuarios",
    rowMode: "array",
  };
  const result = await pool.query(sql8);
  console.log(`Registros: `, result.rows);
};

//EJ-9
const update2 = async () => {
  try {
    const sql9 = {
      text: "INSERT INTO usuarios (id, nombre, telefono) VALUES ($1, $2, $3) RETURNING *",
      values: [3, "Luis", 345678],
    };
    const result = await pool.query(sql9);
    console.log(`Se inserto el registro de id 3: `, result.rows);
  } catch (error) {
    console.log(error.message, "Error: ", error.code);
  }
};

//Prueba de cada uno de los ejercicios
/* insert(); */
/* insert2(); */
/* consulta(); */
/* consulta2(); */
/* update(); */
/* deleteAll(); */
/* insert3(); */
/* consulta3(); */
update2();
