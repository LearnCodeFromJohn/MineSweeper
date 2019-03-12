import { LEFT_CLICK, RIGHT_CLICK } from "../actions";
import { nestedArray } from "../helpers";

let initialState = nestedArray(10, 10);

export default function(state = initialState, action) {
  if (action.payload) return action.payload;
  return state;
}
