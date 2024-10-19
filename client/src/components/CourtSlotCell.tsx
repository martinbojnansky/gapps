export default function CourtSlotCell(props: { value: string }) {
  return (
    <span
      class={
        'badge ' + `${props.value === 'Free' ? 'bg-success' : 'bg-danger'}`
      }
    >
      {props.value}
    </span>
  );
}
