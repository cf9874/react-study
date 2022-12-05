import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
`;
const RedBox = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const BlueBox = styled.div`
  background-color: powderblue;
  width: 100px;
  height: 100px;
`;

const Text = styled.span``;

function App() {
  return (
    <>
      <Wrap>
        <RedBox>
          <Text>asdas</Text>
        </RedBox>
        <BlueBox>
          <Text>@@@</Text>
        </BlueBox>
      </Wrap>
      <Wrap>
        <BlueBox>
          <Text>@@@</Text>
        </BlueBox>
        <RedBox>
          <Text>asdasdsa</Text>
        </RedBox>
      </Wrap>
    </>
  );
}

export default App;
