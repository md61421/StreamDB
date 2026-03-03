import { useState, useRef } from 'react';
export function useHover<T extends HTMLElement>() {
  const [value, setValue] = useState(false);
  const ref = useRef<T>(null);
  return [ref, value] as const;
}
