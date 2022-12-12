import { useState } from "react";

function TodoList() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    console.log(value);
  };
  return (
    <div>
      <h1>Hi</h1>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
