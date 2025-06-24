'use client'
import { useEffect, useState } from 'react';

const useFetch = <T = any>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getApiData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();

        if (!result?.success) {
          setError('API Error: success false');
        } else {
          setData(result.data);
        }
      } catch (err) {
        setError('Network Error');
      } finally {
        setLoading(false);
      }
    };

    getApiData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
