import { useState } from "react";
import { initialOrder } from "./data.js";

let nextId = 0;

export default function Insertion() {
  const [name, setName] = useState("");
  const [orders, setOrders] = useState(initialOrder);

  function handleClick() {
    const insertAt = 1;
    const nextOrder = [
      ...orders.slice(0, insertAt),
      { id: nextId, name: name },
      ...orders.slice(insertAt),
    ];
    setOrders(nextOrder);
    setName("");
  }
  return (
    <div>
      <h1>Insert Into An array</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}> Insert</button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
}
