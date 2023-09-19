import { useState } from "react";

let initialOrder = [
  { id: 0, name: "Burger" },
  { id: 1, name: "Pancake" },
  { id: 2, name: "omelet" },
  { id: 3, name: "Hot dog" },
];

export default function DeleteItem() {
  const [orders, setOrders] = useState(initialOrder);

  return (
    <div className="Orders">
      <h1>Delete an Order</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.name}
            <button
              onClick={() => {
                setOrders(orders.filter((a) => a.id !== order.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
