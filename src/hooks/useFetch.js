// In some sort of custom hook file such as 'useFetch' or 'useAPI'
import { useState, useEffect } from "react";

const baseUrl =
"https://api.nasa.gov/planetary/aapod?api_key=ODX7vfG331Sr6RrRX0GLhKfXypZKtaCV8NF45frT"

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
        setError("Something isn't right. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    callAPI();
  }, [url]);

  
  return { data, error, loading };
}

