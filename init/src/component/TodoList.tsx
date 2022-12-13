import { useForm } from "react-hook-form";
import { atom, useRecoilValue } from "recoil";

const toDoState = atom({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

function TodoList() {
  const value = useRecoilValue(toDoState);
  console.log(value);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Do </h1>
      <hr />
      <form>
        <input
          {...register("toDo", {
            required: "Please write to do",
          })}
        />
      </form>
    </div>
  );
}

export default TodoList;
