import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useMediaQuery(_query: string) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [matches, _setMatches] = useState(false);
  return matches;
}
