import { useState } from "react";
import { useForm } from "react-hook-form";
function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <h1>Hi</h1>
      <form>
        <input {...register("firstName")} placeholder="Write your firstName" />
        <br />
        <input {...register("lastName")} placeholder="Write your lastName" />
        <br />
        <input {...register("userName")} placeholder="Write your userName" />
        <br />
        <input {...register("email")} placeholder="Write your email" />
        <br />
        <input {...register("password")} placeholder="Write your password" />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
