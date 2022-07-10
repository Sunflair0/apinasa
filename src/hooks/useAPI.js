import { useCallback } from "react";

export default function useAPI() {
  const makeAPICall = useCallback(async (url, config) => {
    try {
      const res = await fetch(url, config);
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
      return { data: null, success: false, error: "Something went wrong." };
    }
  }, []);

  const login = useCallback(
    async (clienttag, password) => {
      return await makeAPICall("/api/clients/login", {
        method: "POST",
        body: JSON.stringify({ clienttag, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const addFave = useCallback(
    async (item) => {
      return await makeAPICall("/api/favorites/add", {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [makeAPICall]
  );

  const delFave = useCallback(
    async (item_id) => {
      return await makeAPICall(`/api/favorites/remove/${item_id}`, {
        method: "DELETE",
      });
    },
    [makeAPICall]
  );

  const favesByUserID = useCallback(async () => {
    return await makeAPICall(`/api/favorites/`, {
      method: "GET",
    });
  }, [makeAPICall]);

  const logout = useCallback(async () => {
    return await makeAPICall("/api/clients/logout", { method: "GET" });
  }, [makeAPICall]);

  const verify = useCallback(async () => {
    return await makeAPICall("/api/clients/verify", { method: "GET" });
  }, [makeAPICall]);

  return { login, addFave, delFave, favesByUserID, logout, verify };
}