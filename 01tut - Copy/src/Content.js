import React from "react";
import "./index.css";
import ItemList from "./ItemList";

export default function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length == 0 ? (
        <h1>Empty</h1>
      ) : (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
