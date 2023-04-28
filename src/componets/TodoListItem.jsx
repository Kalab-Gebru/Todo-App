import React from "react";
import { ACTIONS } from "../constants/constant101";

function TodoListItem({ data, dispatch }) {
  function toggle_complete(e) {
    dispatch({ type: ACTIONS.TOGGELE_COMPLETE, payload: { ID: data.id } });
  }

  function delete_todo(e) {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { ID: data.id } });
  }

  return (
    <div className="flex justify-between items-center w-full h-16 bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Desaturated-Blue text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue px-6">
      {/* {console.log(data)} */}
      <div className="flex justify-between items-center space-x-4">
        <button
          onClick={toggle_complete}
          className={`${
            data.Complited
              ? "bg-gradient-to-br from-Primary-bg-purple to-Primary-bg-pink"
              : "border border-Light-Dark-Grayish-Blue dark:border-Dark-Dark-Grayish-Blue"
          } flex justify-center items-center rounded-full w-6 h-6 `}
        >
          {data.Complited && (
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
        <div
          className={`flex  ${
            data.Complited
              ? "line-through text-Light-Light-Grayish-Blue dark:text-Dark-Dark-Grayish-Blue"
              : " text-Light-Very-Dark-Grayish-Blue dark:text-Dark-Light-Grayish-Blue"
          }`}
        >
          {`${data.task}`}
        </div>
      </div>
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
  );
}

export default TodoListItem;
