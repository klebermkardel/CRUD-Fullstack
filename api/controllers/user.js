// Importa o objeto 'db' do módulo 'db.js' para interação com o banco de dados
import { db } from "../db.js";

// Define a função 'getUsers' para lidar com a requisição de obtenção de usuários
export const getUsers = (_, res) => {
    // Cria uma string de consulta SQL para selecionar todos os registros da tabela 'usuarios'
    const q = "SELECT * FROM usuarios";

    // Executa a consulta no banco de dados usando o método 'query' do objeto 'db'
    db.query(q, (err, data) => {
        // Verifica se ocorreu algum erro durante a execução da consulta
        if (err) {
            // Se houver um erro, envia a resposta JSON contendo o erro
            return res.json(err);
        }

        // Se a consulta foi bem-sucedida, envia a resposta JSON com os dados e um status HTTP 200 (OK)
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = 
        "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nasc`) VALEUS(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nasc,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q = 
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nasc` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nasc,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.")
    })
};

export const deleteUser = (req, res) => {
    const q = "DELETE from usuarios WHERE `id`= ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};