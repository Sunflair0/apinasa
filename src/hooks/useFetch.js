export default function useFetch(method) {
  async function callAPI(url, body = null) {
    let opts = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      opts = { ...opts, body: JSON.stringify(body) };
    }

    try {
      const response = await fetch('http://localhost:3306', opts);
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw response;
      }
    } catch (e) {console.log(e);
      return { error: "Something isn't right, please try again"  };
      
    }
  }
  // Exposes the data, any error, and whether or not it was loading
  return { callAPI };
}
