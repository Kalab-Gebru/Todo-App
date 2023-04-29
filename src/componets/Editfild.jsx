import React, { useState } from "react";
import { ACTIONS } from "../constants/constant101";

function Editfild({ data, toggle, dispatch }) {
  const [editedTodo, setEditedTodo] = useState(data);

  function handlesubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: { ID: editedTodo.id, newTask: editedTodo.task },
    });
    toggle();
  }
  return (
    <div className="w-full">
      <form className="w-full" id="edit" onSubmit={handlesubmit}>
        <input
          className="h-12 w-full rounded-lg border bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6"
          type="text"
          value={editedTodo.task}
          onChange={(e) =>
            setEditedTodo({ ...editedTodo, task: e.target.value })
          }
          placeholder="editTodo"
          required
        ></input>
      </form>
    </div>
  );
}

export default Editfild;
