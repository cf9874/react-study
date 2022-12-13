import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IForm {
  toDo: string;
}
interface IToDo {
  id: number;
  text: string;
  desc: "TODO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function TodoList() {
  // const toDos = useRecoilValue(toDoState);
  // const setToDos = useSetRecoilState(toDoState);

  const [toDos, setToDos] = useRecoilState(toDoState); // 위와 동일
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, desc: "TODO" }, ...prev]);
    console.log(toDos);

    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Do </h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write to do",
          })}
        />
        <button>Add</button>
        <ul>
          {toDos?.map((e) => {
            return <li key={e.id}>{e.text}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}

export default TodoList;
