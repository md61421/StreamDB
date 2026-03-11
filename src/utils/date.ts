export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const timeAgo = (_date: Date): string => {
  return 'some time ago'; // temp implementation
};
