import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, desc }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const index = prev.findIndex((e) => e.id === id);
      const newTodo = { id, text, desc: name as "TODO" | "DONE" | "DOING" };

      return [...prev.slice(0, index), newTodo, ...prev.slice(index + 1)];
    });
  };

  return (
    <li style={{ display: "flex", gap: 15 }}>
      <span style={{ minWidth: 150, width: 150 }}> {text}</span>

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
