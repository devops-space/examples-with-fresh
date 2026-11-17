import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="counter">
      <Button id="decrement" onClick={() => props.count.value -= 1}>-1</Button>
      <p class="counter-value">{props.count}</p>
      <Button id="increment" onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
