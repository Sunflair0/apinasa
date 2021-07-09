export const CLEAR_WORLDWEATHER = "Clear Worldweather";
export const SET_WORLDWEATHER = "Set worldweather";

export function clearWorldweather() {
  return { type: CLEAR_WORLDWEATHER };
}

export function setWorldweather(worldweather) {
  return { type: SET_WORLDWEATHER, worldweather };
}
