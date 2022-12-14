
import { useForm } from "react-hook-form";
import {  useRecoilState } from "recoil";
import { toDoState } from "../atoms";


interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setToDos] = useRecoilState(toDoState);

  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, desc: "TODO" }, ...prev]);
    console.log(toDos);

    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write to do",
        })}
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
