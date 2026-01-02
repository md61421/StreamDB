import React from 'react';

export const ErrorMessage = ({ message }: { message: string }) => (
  <div className="text-red-500 text-sm mt-1">{message}</div>
);
