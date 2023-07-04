import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function Inputfild({ init }) {
  const [todoInput, setTodoInput] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    const todoref = collection(db, "Todos");
    try {
      const data = await addDoc(todoref, { task: todoInput, completed: false });
    } catch (err) {
      console.log(err);
    }
    setTodoInput("");
    init();
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
