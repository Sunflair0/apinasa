import { useCallback } from "react";
import axios from "axios";

function useAPI() {
  const makeAPICall = useCallback(async (url, config) => {
    try {
      return (await axios(url, config)).data;
    } catch (error) {
      console.log(error);
      return { data: null, success: false, error: "Something went wrong." };
    }
  }, []);

  const login = useCallback(
    async (clienttag, password) => {
      return await makeAPICall("/api/clients/login", {
        method: "post",
        data: {
          clienttag,
          password
        },
      });
    },
    [makeAPICall]
  );

  // const tours = useCallback(
  //   async () => {
  //     return await makeAPICall("/api/clients/venturetours", {
  //       method: "get",
  //       data: {         
  //       },
  //     });
  //   },
  //   [makeAPICall]
  // );

  const signup = useCallback(async (clienttag, password) => {
    return await makeAPICall("api/clients/signup", { method: "put" ,
    data: {
      clienttag,
      password,
    },
  });
},
   [makeAPICall] ); 

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
    return await makeAPICall("/api/clients/logout", { method: "get" });
  }, [makeAPICall]);


 const verify = useCallback(async () => {
    return await makeAPICall("/api/clients/verify", 
    { method: "get", 
  });
  }, [makeAPICall]);
  return { login, logout, signup, verify, addToAlbum, delFromAlbum, albumByUserID };
};
 
export default useAPI;