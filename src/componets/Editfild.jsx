import React, { useState } from "react";
import { useTodo } from "../hooks/useContextData";

function Editfild({ data, toggle, uid }) {
  const [editedTodo, setEditedTodo] = useState(data.task);
  const { todoFun } = useTodo();

  async function handlesubmit(e) {
    e.preventDefault();
    todoFun.updateTodoFun(data.id, editedTodo, uid);
    toggle();
  }
  return (
    <div className="w-full">
      <form className="w-full" id="edit" onSubmit={handlesubmit}>
        <input
          className="h-12 w-full rounded-lg border bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6"
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          placeholder="editTodo"
          required
        ></input>
      </form>
    </div>
  );
}

export default Editfild;
