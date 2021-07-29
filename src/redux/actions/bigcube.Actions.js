export const SET_BIGCUBE = "Set BigCube";
export const CLEAR_BIGCUBE = "Clear BigCube"


export function clearBigCube(bigcube) {
  return { type:CLEAR_BIGCUBE , bigcube };
}

export function setbigcube(bigcube) {
  return { type: SET_BIGCUBE, bigcube };
}


