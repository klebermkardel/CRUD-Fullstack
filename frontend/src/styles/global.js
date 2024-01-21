// Importa a função createGlobalStyle do pacote styled-components.
import { createGlobalStyle } from "styled-components"

// Cria um componente de estilo global usando a função createGlobalStyle.
const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;  
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: #f2f2f2;
    }
`

// Exporta o componente de estilo global para uso em outros componentes.
export default Global
