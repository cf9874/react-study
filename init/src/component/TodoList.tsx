import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { descState, toDoSelector } from "../atoms";
import { DESC } from "../enum";
import CreateToDo from "./CreateTodo";
import ToDo from "./ToDo";

function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [desc, setDesc] = useRecoilState(descState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setDesc(value as DESC);
  };
  console.log(desc);
  return (
    <div>
      <h1>To Do </h1>
      <hr />
      <form>
        <select value={desc} onInput={onInput}>
          <option value={DESC.TODO}>TODO</option>
          <option value={DESC.DOING}>DOING</option>
          <option value={DESC.DONE}>DONE</option>
        </select>
      </form>
      <CreateToDo />
      {toDos.map((e) => (
        <ToDo key={e.id} {...e} />
      ))}
    </div>
  );
}

export default TodoList;
