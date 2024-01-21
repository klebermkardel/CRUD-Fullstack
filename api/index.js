// Importa o framework Express.js para criar e configurar o servidor.
import express from "express"

// Importa as rotas relacionadas aos usuários de um módulo externo (arquivo users.js).
import userRoutes from "./routes/users.js"

// Importa o middleware CORS (Cross-Origin Resource Sharing) para lidar com solicitações de diferentes origens.
import cors from "cors"

// Cria uma instância do aplicativo Express.
const app = express()

// Adiciona um middleware para processar automaticamente os corpos das solicitações no formato JSON.
app.use(express.json())

// Adiciona o middleware CORS ao aplicativo para permitir solicitações de diferentes origens.
app.use(cors())

// Define que as rotas definidas no arquivo users.js serão acessíveis a partir da raiz ("/") do servidor.
app.use("/", userRoutes)

// Inicia o servidor na porta 8800. O servidor ficará ouvindo por solicitações HTTP nessa porta.
app.listen(8800)
