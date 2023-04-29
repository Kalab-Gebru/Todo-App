import {
  collection,
  query,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { ACTIONS } from "../constants/constant101";

export function TodoReducer(todo, action) {
  switch (action.type) {
    case ACTIONS.GET_INIT_DATA:
      {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let todosArray = [];
          querySnapshot.forEach((doc) => {
            todosArray.push({ ...doc.data(), id: doc.id });
          });
          {
            console.log(todosArray);
          }
          return [...todo, todosArray];
        });
        unsub();
      }
      return [];
    case ACTIONS.ADD_TODO: {
      addDoc(collection(db, "todos"), newTodo(action.payload.newTask));
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
          return { ...t, Complited: !t.Complited };
        }
        return t;
      });
    case ACTIONS.CLEAR_COMPLETE:
      return todo.filter((t) => {
        return t.Complited !== true;
      });
    default:
      return todo;
  }
}

function newTodo(newTask) {
  return {
    id: Date.now(),
    task: newTask,
    Complited: false,
  };
}
