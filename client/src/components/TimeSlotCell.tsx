export default function TimeSlotCell(props: { start: string; end: string }) {
  const rtf = new Intl.DateTimeFormat('en', {
    // Use navigator.language if needed
    timeStyle: 'short',
  });

  return (
    <span>
      {rtf.format(new Date(props.start))} - {rtf.format(new Date(props.end))}
    </span>
  );
}
