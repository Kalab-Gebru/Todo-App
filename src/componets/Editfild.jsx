import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function Editfild({ data, toggle, init }) {
  const [editedTodo, setEditedTodo] = useState(data.task);

  async function handlesubmit(e) {
    e.preventDefault();
    const todoref = doc(db, "Todos", data.id);
    try {
      await updateDoc(todoref, { task: editedTodo });
      toggle();
      init();
    } catch (err) {
      console.log(err);
    }
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
