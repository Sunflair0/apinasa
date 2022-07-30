import { useCallback } from "react";
import axios from "axios";

const useAPI = () => {
  const makeAPICall = useCallback(async (url, config) => {
    try {
      return (await axios(url, config)).data;
    } catch (error) {
      console.log(error);
      return { data: null, success: false, error: "Something went wrong." };
    }
  }, []);

  const login = useCallback(
    async (username, password) => {
      return await makeAPICall("/api/users/login", {
        method: "post",
        data: {
          username,
          password
        },
      });
    },
    [makeAPICall]
  );

  // const tours = useCallback(
  //   async () => {
  //     return await makeAPICall("/api/users/venturetours", {
  //       method: "get",
  //       data: {         
  //       },
  //     });
  //   },
  //   [makeAPICall]
  // );

  const signup = useCallback(async (username, password) => {
    return await makeAPICall("api/users/signup", {
      method: "put",
      data: {
        username,
        password,
      },
    });
  },
    [makeAPICall]);

  const addToAlbum = useCallback(
    async (item) => {
      return await makeAPICall("/api/album/add", {
        method: "put",
        data: {
          item
        },
      });
    },
    [makeAPICall]
  );

  const delFromAlbum = useCallback(
    async (item_id) => {
      return await makeAPICall(`/api/album/remove/${item_id}`, {
        method: "delete",
      });
    },
    [makeAPICall]
  );

  const albumByUserID = useCallback(async () => {
    return await makeAPICall(`/api/album/`, {
      method: "get",
    });
  }, [makeAPICall]);

  const logout = useCallback(async () => {
    return await makeAPICall("/api/users/logout", { method: "get" });
  }, [makeAPICall]);


  const verify = useCallback(async () => {
    return await makeAPICall("/api/users/verify",
      {
        method: "get",
      });
  }, [makeAPICall]);
  return { login, logout, signup, verify };
};

export default useAPI;