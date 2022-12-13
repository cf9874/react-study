import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";
import TodoList from "./component/TodoList";

const GlobalStyle = createGlobalStyle`
  
`;

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <TodoList />
      </RecoilRoot>
    </>
  );
}

export default App;
