import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateTodo";
import ToDo from "./ToDo";

function TodoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);

  return (
    <div>
      <h1>To Do </h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((e) => (
          <ToDo key={e.id} {...e} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
