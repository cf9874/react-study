import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, desc }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  //   const onClick = (newDesc: IToDo["desc"]) => {
  //     if (newDesc === "DONE") {
  //         ....
  //     }
  //   };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
  };
  return (
    <li>
      <span> {text}</span>
      {/* <button>{desc}</button> */}
      {/* {desc !== "TODO" && <button onClick={() => onClick("TODO")}>TODO</button>}
      {desc !== "DOING" && <button onClick={() => onClick("DOING")}>DOING</button>}
      {desc !== "DONE" && <button onClick={() => onClick("DONE")}>DONE</button>} */}
      {desc !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          TODO
        </button>
      )}
      {desc !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          DOING
        </button>
      )}
      {desc !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          DONE
        </button>
      )}
    </li>
  );
}
export default ToDo;
