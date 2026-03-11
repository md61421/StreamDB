import { useState, useRef } from 'react';
export function useHover<T extends HTMLElement>() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, _setValue] = useState(false);
  const ref = useRef<T>(null);
  return [ref, value] as const;
}
