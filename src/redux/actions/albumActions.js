export const ADD_ENTRY = "Add Entry";
export const DELETE_ENTRY = "Delete Entry";
export const CLEAR_ALBUM = "Clear Album";

export function addEntry(pic) {
  return { type: ADD_ENTRY, pic };
}

export function deleteEntry(id) {
  return { type: DELETE_ENTRY, id };
}

export function clearAlbum() {
  return { type: CLEAR_ALBUM };
}
