import { createEffect, createSignal } from 'solid-js';

export default function DatePicker(props: {
  value?: string;
  onValueChange?: (value: string | undefined | null) => void;
}) {
  const [value, setValue] = createSignal<string | undefined | null>(
    props.value || undefined
  );

  createEffect(() => {
    if (props.onValueChange) {
      props.onValueChange(value());
    }
  });

  return (
    <input
      id="selectedDateControl"
      type="date"
      class="form-control form-control-m bg-body"
      value={`${value()?.split('T')?.[0]}`}
      on:change={(e) => setValue(new Date(e.target.value).toISOString())}
      required
    />
  );
}
