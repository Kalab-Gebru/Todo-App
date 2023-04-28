import { ACTIONS } from "../constants/constant101";

export function TodoReducer(todo, action) {
  switch (action.type) {
    case ACTIONS.GET_INIT_DATA:
      return [];
    case ACTIONS.ADD_TODO:
      return [...todo, newTodo(action.payload.newTask)];
    case ACTIONS.EDIT_TODO:
      return [];
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
    case ACTIONS.FILTER_COMPLETE:
      return [];
    case ACTIONS.FILTER_ALL:
      return [];
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
