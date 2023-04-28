import React, { useContext, useReducer } from "react";
import { TodoReducer } from "./useReducerfunction";

const TodoDataContext = React.createContext();
const Todo_Data = [
  {
    id: "1",
    task: "Finish the by friday lunch time 1",
    Complited: true,
  },
  {
    id: "2",
    task: "Finish the by friday lunch time 2",
    Complited: false,
  },
  {
    id: "3",
    task: "Finish the by friday lunch time 3",
    Complited: false,
  },
  {
    id: "4",
    task: "Finish the by friday lunch time 4",
    Complited: false,
  },
  {
    id: "5",
    task: "Finish the by friday lunch time 5",
    Complited: false,
  },
  {
    id: "6",
    task: "Finish the by friday lunch time 6",
    Complited: false,
  },
];

export function useTodo() {
  return useContext(TodoDataContext);
}

export function DataProvider({ children }) {
  const [todoData, dispatch] = useReducer(TodoReducer, Todo_Data);

  return (
    <TodoDataContext.Provider value={{ todoData, dispatch }}>
      {children}
    </TodoDataContext.Provider>
  );
}
