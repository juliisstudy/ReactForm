import { useState } from "react";

let initialCounters = [0, 0];

export default function Counter() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((i, j) => {
      if (j === index) {
        return i + 1;
      } else {
        return i;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div>
      <h1> Counter Example</h1>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
