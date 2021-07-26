export const CLEAR_ADDFAVORITE = "Clear AddFavorite";
export const SET_ADDFAVORITE = "Set AddFavorite";

export function clearAddFavorite() {
return { type: CLEAR_ADDFAVORITE};
}

export function setAddFavorite(AddFavorite) {
return { type: SET_ADDFAVORITE, AddFavorite };
}
