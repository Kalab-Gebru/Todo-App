import React, { useState, useRef, useEffect } from "react";
import { useTodo } from "../hooks/useContextData";
// import { todoFun } from "../lib/firebaseApi";

function Editfild({ data, toggle, uid }) {
  const [editedTodo, setEditedTodo] = useState(data.task);
  const { todoFun } = useTodo();
  const inputRef = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  async function handlesubmit(e) {
    e.preventDefault();
    todoFun.updateTodoFun(data.id, editedTodo, uid);
    toggle();
  }
  return (
    <div className="w-full">
      <form className="w-full" id="edit" onSubmit={handlesubmit}>
        <input
          autoFocus
          className="w-full h-12 px-6 border rounded-lg bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue"
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
