import React from 'react';

export const Badge = ({ text }: { text: string }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
    {text}
  </span>
);
