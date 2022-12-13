import { useForm } from "react-hook-form";
import { atom } from "recoil";

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  password1: string;
  extraError?: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IFormData) => {
    const { password, password1 } = data;
    if (password !== password1) {
      return setError("password1", { message: "Please check password again." });
    }
    setError(
      "extraError",
      { message: "Sorry. Server is down.." },
      {
        shouldFocus: true,
      }
    );
    console.log(data);
  };
  console.log("error", errors);

  return (
    <div>
      <h1>Hi</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("firstName", {
            required: "firstName is required",
            minLength: { value: 10, message: "could you give me more 10?" },
          })}
          placeholder="Write your firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input {...register("lastName", { required: "lastName is required" })} placeholder="Write your lastName" />
        <span>{errors?.lastName?.message}</span>
        <input {...register("userName", { required: "userName is required" })} placeholder="Write your userName" />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("email", {
            required: "email is required",
            validate: {
              noASD: (value) => (value.includes("ASD") ? "Sorry. ASD is not allowed" : true),
              noZXC: (value) => (value.includes("ZXC") ? "Sorry. ZXC is not allowed" : true),
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com is allowed",
            },
          })}
          placeholder="Write your email"
        />{" "}
        <span>{errors?.email?.message}</span>
        <input
          type="password"
          {...register("password", { required: "password is required" })}
          placeholder="Write your password"
        />
        <span>{errors?.password?.message}</span>
        <input
          type="password"
          {...register("password1", { required: "password1 is required" })}
          placeholder="Write your password1"
        />
        <span>{errors?.password1?.message}</span>
        <br />
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default TodoList;
