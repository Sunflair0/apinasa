export const usernameSelector = (state) => state.user.username;
export const usernameSelectorID = (state) => state.username.id;
export const userRoleSelector = (state) => state.user.role;
export const usernameAndID = (state) => ({
  id: state.user.id,
  username: state.user.username,
});
