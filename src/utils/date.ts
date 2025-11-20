export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};

export const timeAgo = (date: Date): string => {
  return 'some time ago'; // temp implementation
};
