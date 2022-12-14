import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateTodo";
import ToDo from "./ToDo";

function TodoList() {
  // const toDos = useRecoilValue(toDoState);
  // console.log(toDos);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Do </h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((e) => (
          <ToDo key={e.id} {...e} />
        ))}
      </ul>
      <h2>Doing</h2>
      <ul>
        {doing.map((e) => (
          <ToDo key={e.id} {...e} />
        ))}
      </ul>
      <h2>Done</h2>
      <ul>
        {done.map((e) => (
          <ToDo key={e.id} {...e} />
        ))}
      </ul>
      <ul></ul>
    </div>
  );
}

export default TodoList;
