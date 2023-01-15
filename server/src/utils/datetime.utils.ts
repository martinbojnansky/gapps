export const getElapsedTimeInMinutes = (start: Date, end: Date): number => {
  return (end.getTime() - start.getTime()) / 60000;
}

export const formatElapsedTimeInMinutes = (minutes: number) => {
  return `${Math.floor(minutes)} minutes and ${Math.floor((minutes - Math.floor(minutes)) *60 )} seconds`
}