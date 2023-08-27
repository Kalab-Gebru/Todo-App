import React, { useState } from "react";
import { useTodo } from "../hooks/useContextData";
// import { todoFun } from "../lib/firebaseApi";

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
          className="w-full h-16 px-6 my-5 rounded-lg md:my-8 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue"
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
