// Importa o módulo 'express' para criar rotas
import express from "express";

// Importa a função 'getUsers' do arquivo 'user.js' no diretório 'controllers'
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

// Cria um objeto router utilizando o método express.Router()
const router = express.Router();

// Define uma rota HTTP GET para a raiz ("/") da aplicação
// Quando uma requisição GET é feita para a raiz, a função getUsers será chamada
router.get("/", getUsers);

// Exporta o objeto router para que possa ser utilizado em outros lugares do código
export default router;
