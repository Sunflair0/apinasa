export const ADD_ENTRY = "Add Entry";
export const DELETE_ENTRY = "Delete Entry";
export const CLEAR_ALBUM = "Clear Album";
export const SET_ALBUM = "Set Album";

export function addEntry(item) {
  return { type: ADD_ENTRY, item };
}

export function deleteEntry(id) {
  return { type: DELETE_ENTRY, id };
}

export function clearAlbum() {
  return { type: CLEAR_ALBUM };
}

export function setAlbum(album) {
  return {type: SET_ALBUM, album};
}
