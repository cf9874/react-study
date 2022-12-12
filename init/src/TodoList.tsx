import { useState } from "react";
import { useForm } from "react-hook-form";
function TodoList() {
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    const { firstName, lastName, userName, email, password } = data;
    console.log(data);
  };
  console.log("error", formState.errors);

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
        <input {...register("lastName", { required: "lastName is required" })} placeholder="Write your lastName" />
        <input {...register("userName", { required: "userName is required" })} placeholder="Write your userName" />
        <input {...register("email", { required: "email is required" })} placeholder="Write your email" />
        <input {...register("password", { required: "password is required" })} placeholder="Write your password" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
