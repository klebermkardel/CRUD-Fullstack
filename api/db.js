// Importa o módulo "mysql" para se conectar ao banco de dados MySQL.
import mysql from "mysql"

// Cria uma conexão com o banco de dados MySQL usando as configurações fornecidas.
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Ck2024kc",
    database: "crud-fullstack"
})
