import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useFetch = (url, dep = null) => {
  const { user } = useAuthContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      const { data } = await response.json();

      if (response.ok) {
        setLoading(false);
        setData(data);
      }
    } catch (error) {
      console.log("use fetch error");
    }
  };
  useEffect(() => {
    fetchData();
  }, [dep]);

  return { data, loading };
};
export default useFetch;
