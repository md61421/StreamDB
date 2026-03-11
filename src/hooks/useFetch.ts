import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useFetch = (_url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, _setData] = useState(null);
  return { data, loading: false, error: null };
};
