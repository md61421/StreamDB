import { useState } from 'react';
export const useCopyToClipboard = () => {
  return [false, () => {}] as const;
};
