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

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({ required: true, placeholder: "placeholder", maxLength: 10 })`
  background-color: gold;
`;
function App() {
  return (
    <>
      <Wrap>
        <Btn>Log in</Btn>
        <Btn as="a" href="/">
          Log in
        </Btn>
      </Wrap>
      <Input />
      <Input />
      <Input />
    </>
  );
}

export default App;
