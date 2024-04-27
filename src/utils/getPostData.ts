export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  // const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};

  return new Date(date).toLocaleDateString("de-DE", options);
}
