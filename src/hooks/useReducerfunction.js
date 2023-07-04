import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { ACTIONS } from "../constants/constant101";

export function TodoReducer(todo, action) {
  const todoref = collection(db, "Todos");
  const getTodos = async () => {
    try {
      const data = await getDocs(todoref);
      const filterdData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filterdData;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  async function tryswitch(action) {
    switch (action.type) {
      case ACTIONS.GET_INIT_DATA: {
        const initData = await getTodos();
        return initData;
      }
      case ACTIONS.ADD_TODO: {
        addDoc(todoref, newTodo(action.payload.newTask));
        return [...todo, newTodo(action.payload.newTask)];
      }
      case ACTIONS.EDIT_TODO:
        return todo.map((t) => {
          if (t.id === action.payload.ID) {
            {
              console.log("todo with " + t.id + " was edited");
            }
            return { ...t, task: action.payload.newTask };
          }
          return t;
        });
      case ACTIONS.DELETE_TODO:
        return todo.filter((t) => {
          return t.id !== action.payload.ID;
        });
      case ACTIONS.TOGGELE_COMPLETE:
        return todo.map((t) => {
          if (t.id === action.payload.ID) {
            {
              console.log("todo with " + t.id + " was toggled complete");
            }
            return { ...t, completed: !t.completed };
          }
          return t;
        });
      case ACTIONS.CLEAR_COMPLETE:
        return todo.filter((t) => {
          return t.completed !== true;
        });
      default:
        return todo;
    }
  }
  tryswitch(action);
}

function newTodo(newTask) {
  return {
    task: newTask,
    completed: false,
  };
}
