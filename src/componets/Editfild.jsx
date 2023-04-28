import React, { useState } from "react";
import { useTodo } from "../hooks/useContextData";
import { ACTIONS } from "../constants/constant101";

function Editfild({data,toggle}) {
  const { dispatch } = useTodo();
  const [editedTodo, setEditedTodo] = useState(data);

  function handlesubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { ID:editedTodo.id ,newTask: editedTodo.task } });
    toggle()
  }
  return (
    <div className="grow">
      <form id="edit" onSubmit={handlesubmit}>
        <input
          className="h-16 w-full rounded-lg border my-5 md:my-8 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6"
          type="text"
          value={editedTodo.task}
          onChange={(e) => setEditedTodo(e.target.value)}
          placeholder="editTodo"
        ></input>
      </form>
    </div>
  );
}

export default Editfild;
