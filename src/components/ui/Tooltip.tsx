import React from 'react';

export const Tooltip = ({ text, children }: { text: string, children: React.ReactNode }) => (
  <div className="group relative inline-block">
    {children}
    <span className="hidden group-hover:block absolute z-10 bg-black text-white text-xs rounded p-1">{text}</span>
  </div>
);
