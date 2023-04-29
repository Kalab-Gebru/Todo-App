import React, { useState } from "react";
import { useTodo } from "../hooks/useContextData";
import { ACTIONS } from "../constants/constant101";

function Inputfild() {
  const { dispatch } = useTodo();
  const [todoInput, setTodoInput] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { newTask: todoInput } });
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
          placeholder="Username"
          required
        ></input>
      </form>
    </div>
  );
}

export default Inputfild;
