export const LEFT_CLICK = "LEFT_CLICK";
export const RIGHT_CLICK = "RIGHT_CLICK";

export function leftClick() {
  return {
    type: LEFT_CLICK,
    payload: []
  };
}

export function rightClick() {
  return {
    type: RIGHT_CLICK,
    payload: []
  };
}
