import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span``;

function App() {
  return (
    <>
      <Wrap>
        <Box bgColor="tomato">
          <Text>asdas</Text>
        </Box>
        <Box bgColor="powderblue">
          <Text>@@@</Text>
        </Box>
      </Wrap>
      <Wrap>
        <Box bgColor="powderblue">
          <Text>@@@</Text>
        </Box>
        <Circle bgColor="orange">
          <Text>asdasdsa</Text>
        </Circle>
      </Wrap>
    </>
  );
}

export default App;
