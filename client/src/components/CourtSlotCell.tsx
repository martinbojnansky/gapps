export default function TimeSlotCell(props: { value: string }) {
  return (
    <span
      class={
        'badge ' + `${props.value === 'Free' ? 'bg-success' : 'bg-secondary'}`
      }
    >
      {props.value}
    </span>
  );
}
