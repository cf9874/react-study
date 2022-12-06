import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  display: flex;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({ required: true, placeholder: "placeholder", maxLength: 10 })`
  background-color: gold;
`;

const animation = keyframes`
0%{
  transform:rotate(0deg);
  border-radius: 0px;
}
50%{
  /* transform:rotate(360deg); */
  border-radius: 100px
}
100%{
  transform:rotate(360deg);
  border-radius: 0px;
}
`;

const RotateBox = styled(Box)`
  color: white;
  background-color: blue;
  animation: ${animation} 1s linear infinite;
  margin-top: 20px;
  margin-left: 20px;
  span {
    font-size: 50px;
    &:hover {
      font-size: 100px;
    }
  }
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
      <RotateBox>asd</RotateBox>
    </>
  );
}

export default App;
