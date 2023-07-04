import React, { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import Editfild from "../componets/Editfild";
import edit from "../assets/images/edit-light.png";

function TodoListItem({ data, init }) {
  const [editMode, setEditMode] = useState(false);
  const [checked, setChecked] = useState(data.completed);

  async function toggle_complete() {
    const todoref = doc(db, "Todos", data.id);
    try {
      await updateDoc(todoref, { completed: !data.completed });
      setChecked((pre) => !pre);
      init();
    } catch (err) {
      console.log(err);
    }
  }

  async function delete_todo() {
    const todoref = doc(db, "Todos", data.id);
    try {
      await deleteDoc(todoref);
      init();
    } catch (err) {
      console.log(err);
    }
  }

  function edit_todo() {
    setEditMode((edit) => !edit);
    {
      console.log(editMode);
    }
  }

  return (
    <div className="flex justify-between items-center w-full min-h-min py-2 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6">
      {/* {console.log(data)} */}
      <div className="flex justify-start items-center max-w-full space-x-4">
        <div className="h-full">
          <button
            onClick={toggle_complete}
            className={`${
              checked
                ? "bg-gradient-to-br from-Primary-bg-purple to-Primary-bg-pink"
                : "border border-Light-Dark-Grayish-Blue dark:border-Dark-Dark-Grayish-Blue"
            } flex justify-center items-center rounded-full w-6 h-6 `}
          >
            {checked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="9"
                className=" stroke-white"
              >
                <path fill="none" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`flex px-4 text-ellipsis overflow-hidden ${
            data.Complited
              ? "line-through  text-Light-Light-Grayish-Blue dark:text-Dark-Dark-Grayish-Blue"
              : " text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue"
          }`}
        >
          {editMode ? (
            <Editfild data={data} toggle={edit_todo} init={init} />
          ) : (
            `${data.task}`
          )}
        </div>
      </div>
      <div className="flex justify-end items-center h-12 min-w-fit space-x-6">
        <button onClick={edit_todo}>
          <img className="w-6 h-6" src={edit} alt="edit" />
        </button>
        <button onClick={delete_todo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              className=" fill-Light-Dark-Grayish-Blue dark:fill-Dark-Dark-Grayish-Blue "
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
