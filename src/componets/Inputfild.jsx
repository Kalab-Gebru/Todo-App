import React, { useState } from "react";
import { useTodo } from "../hooks/useContextData";

function Inputfild({ uid }) {
  const [todoInput, setTodoInput] = useState("");
  const { todoFun } = useTodo();

  async function handlesubmit(e) {
    e.preventDefault();
    todoFun.createTodoFun(todoInput, uid);
    todoFun.init(uid);
    setTodoInput("");
  }
  return (
    <div>
      <form id="input" onSubmit={handlesubmit}>
        <input
          className="h-16 w-full rounded-lg my-5 md:my-8 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6"
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add new Todo..."
          required
        ></input>
      </form>
    </div>
  );
}

export default Inputfild;
