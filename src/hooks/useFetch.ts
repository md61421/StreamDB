import { useState } from 'react';
export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  return { data, loading: false, error: null };
};
