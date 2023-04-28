import { ACTIONS } from "../constants/constant101";

export function TodoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_INIT_DATA:
      return [];
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: "7",
          task: "Finish the by friday lunch time 7",
          Complited: true,
        },
      ];
    case ACTIONS.EDIT_TODO:
      return [];
    case ACTIONS.TOGGELE_COMPLITE:
      return [];
    case ACTIONS.FILTER_COMPLETE:
      return [];
    case ACTIONS.FILTER_ALL:
      return [];
    default:
      return state;
  }
}
