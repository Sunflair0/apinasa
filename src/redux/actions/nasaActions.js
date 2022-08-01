export const ADD_ENTRY = "Add Entry";
export const REMOVE_ENTRY = "Delete Entry";
export const CLEAR_NASA = "Clear Nasa";


export function addEntry(entry) {
  return { type: ADD_ENTRY, entry };
}

export function removeEntry(id) {
  return { type: REMOVE_ENTRY, id };
}

export const clearNasa = () => {
  return {type: CLEAR_NASA};
};
