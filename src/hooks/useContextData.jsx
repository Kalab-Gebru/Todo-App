import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import React, { useContext, useState, useEffect } from "react";

const TodoDataContext = React.createContext();

export function useTodo() {
  return useContext(TodoDataContext);
}

export function DataProvider({ children }) {
  const [todoData, setTodoData] = useState([]);
  const [todoFun, setTodoFun] = useState({});

  useEffect(() => {
    setTodoFun({
      init,
      createTodoFun,
      updateTodoFun,
      updateToggleFun,
      deleteTodoFun,
    });
    // init();
  }, []);
  const init = async (uid) => {
    const todoref = collection(db, uid);
    try {
      const data = await getDocs(todoref);
      const filterdData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodoData(filterdData);
    } catch (err) {
      console.log(err);
      setTodoData([]);
    }
  };

  const createTodoFun = async (todoInput, uid) => {
    const todoref = collection(db, uid);
    try {
      await addDoc(todoref, { task: todoInput, completed: false });
    } catch (err) {
      console.log(err);
    }
    init(uid);
  };

  const updateTodoFun = async (id, editedTodo, uid) => {
    const todoref = doc(db, uid, id);
    try {
      await updateDoc(todoref, { task: editedTodo });
      init(uid);
    } catch (err) {
      console.log(err);
    }
  };

  const updateToggleFun = async (id, completed, uid) => {
    const todoref = doc(db, uid, id);
    try {
      await updateDoc(todoref, { completed: !completed });
      init(uid);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodoFun = async (id, uid) => {
    const todoref = doc(db, uid, id);
    try {
      await deleteDoc(todoref);
      init(uid);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TodoDataContext.Provider value={{ todoData, todoFun, setTodoData }}>
      {children}
    </TodoDataContext.Provider>
  );
}
