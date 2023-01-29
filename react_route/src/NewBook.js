import React from "react";
import { useOutletContext } from "react-router-dom";

export default function NewBook() {
  const obj = useOutletContext();
  return <h1>NewBook {obj.hellow}</h1>;
}
