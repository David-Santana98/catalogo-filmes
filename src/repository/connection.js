import mysql from "mysql2/promise";

const conexao = await mysql.createConnection({
  host: "127.0.0.1",
  database: "catalogofilmesdb",
  user: "root",
  senha: "40673553",
});

console.log("BD conectado com sucesso!");

export default conexao;
