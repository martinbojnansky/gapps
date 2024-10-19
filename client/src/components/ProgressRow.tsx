import { Show } from 'solid-js';

export default function ProgressRow(props: {
  visible: boolean;
  colSpan: number;
}) {
  return (
    <Show when={props.visible}>
      <tr>
        <td colspan={props.colSpan || 1}>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style="width: 100%"
            ></div>
          </div>
        </td>
      </tr>
    </Show>
  );
}
