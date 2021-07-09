export const clienttagSelector = (state) => state.client.clienttag;
export const clienttagSelectorID = (state) => state.clienttag.id;
export const clientRoleSelector = (state) => state.client.role;
export const clienttagSelector = (state) => state.client.clienttag;
export const clienttagAndID = (state) => ({
  id: state.client.id,
  clienttag: state.client.clienttag,
});
