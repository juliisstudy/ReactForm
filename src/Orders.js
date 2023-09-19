import { useState } from "react";

export default function Orders() {
  const [name, setName] = useState("");
  const [orders, setOrders] = useState([]);
  let nextId = 0;

  return (
    <>
      <div>
        <h1>Orders</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            orders.push({
              id: nextId++,
              name: name,
            });
          }}
        >
          Add
        </button>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>{order.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
