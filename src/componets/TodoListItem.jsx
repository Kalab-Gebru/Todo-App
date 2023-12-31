import React, { useState } from "react";
import Editfild from "../componets/Editfild";
import edit from "../assets/images/edit-light.png";
import { useTodo } from "../hooks/useContextData";
// import { todoFun } from "../lib/firebaseApi";

function TodoListItem({ data, uid }) {
  const [editMode, setEditMode] = useState(false);
  const { todoFun } = useTodo();

  async function toggle_complete() {
    todoFun.updateToggleFun(data.id, data.completed, uid);
  }

  async function delete_todo() {
    todoFun.deleteTodoFun(data.id, uid);
  }

  function edit_todo() {
    setEditMode((edit) => !edit);
  }

  return (
    <div className="flex items-center justify-between w-full px-6 py-2 min-h-min bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue">
      {/* {console.log(data)} */}
      <div className="flex items-center justify-start max-w-full space-x-4">
        <div className="h-full">
          <button
            onClick={toggle_complete}
            className={`${
              data.completed
                ? "bg-gradient-to-br from-Primary-bg-purple to-Primary-bg-pink"
                : "border border-Light-Dark-Grayish-Blue dark:border-Dark-Dark-Grayish-Blue"
            } flex justify-center items-center rounded-full w-6 h-6 `}
          >
            {data.completed && (
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
            <Editfild data={data} toggle={edit_todo} uid={uid} />
          ) : (
            `${data.task}`
          )}
        </div>
      </div>
      <div className="flex items-center justify-end h-12 space-x-6 min-w-fit">
        <button onClick={edit_todo}>
          <img className="w-6 h-6" src={edit} alt="edit" />
        </button>
        <button onClick={delete_todo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              className=" fill-Light-Dark-Grayish-Blue dark:fill-Dark-Dark-Grayish-Blue"
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
