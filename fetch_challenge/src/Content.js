import React from "react";

export default function Content({ items }) {
  return (
    <div className="Content">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <label>{JSON.stringify(item)}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
