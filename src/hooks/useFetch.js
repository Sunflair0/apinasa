// In some sort of custom hook file such as 'useFetch' or 'useAPI'
import { useState, useEffect } from "react";
const apiKey = process.env.REACT_APP_NASA_KEY;

const baseUrl =
`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

export default function useFetch(url) {
  // This hook uses state management AND hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setData(null);
    if (url.length < 3) {
      setError("Search must be at least 3 characters long!");
      return;
    }
    async function callAPI() {
      setLoading(true);
      // This is with fetch, but it could just as easily be with axios
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();

          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
        setError("Something went wrong. Please try again later");
      } finally {
        setLoading(false);
      }
    }
    callAPI();
  }, [url]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error, loading };
}
