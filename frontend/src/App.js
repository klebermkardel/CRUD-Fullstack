import GlobalStyle from "./styles/global";
import styled from "styled-components"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position={toast.POSTION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
