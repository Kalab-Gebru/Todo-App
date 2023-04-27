import { ACTIONS } from "../constants/constant101";

export function Reducerfunction(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECRIMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
