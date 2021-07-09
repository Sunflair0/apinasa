export const clientSelector = (state) => state.client;
export const clientSelectorID = (state) => state.client.id;
export const clientRoleSelector = (state) => state.client.role;
export const clienttagSelector = (state) => state.client.clienttag;
export const clienttagAndID = (state) => ({
  id: state.client.id,
  clienttag: state.client.clienttag,
});
