import { createGlobalStyle } from "styled-components";
import TodoList from "./component/TodoList";

const GlobalStyle = createGlobalStyle`
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  );
}

export default App;
