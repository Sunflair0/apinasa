export const SET_BIGCUBE = "Set BigCube";
export const SET_UNSETBIGCUBE = "Set UnsetBigCube"
export const SET_BUYBIGCUBE = "Set BuyBigCube"
export const SET_UNBUYBIGCUBE= "Set UnbuyBigCube"

export function setBigCube(bigcube) {
  return { type: SET_BIGCUBE, bigcube };
}

export function setunsetBigCube(unsetbigcube) {
  return { type: SET_UNSETBIGCUBE, unsetbigcube };
}

export function setBuyBigCube(buybigcube) {
  return { type: SET_BUYBIGCUBE, buybigcube };
}

export function setUnbuyBigCube(unbuybigcube) {
  return { type: SET_UNBUYBIGCUBE, unbuybigcube };
}
