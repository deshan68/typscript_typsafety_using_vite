import React, { useState } from "react";
import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";

export default function BookLayOut() {
  const [searchParams, setSetSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <>
      <br />
      <NavLink to={"/books/1"}>Book 1</NavLink>
      <br />
      <NavLink to={"/books/2"}>Book 2</NavLink>
      <br />
      <NavLink to={`/books/${number}`}>Book {number}</NavLink>
      <br />
      <NavLink to={"/books/new"}>New Book</NavLink>
      <Outlet context={{ hellow: "World" }} />
      <input
        type={"number"}
        value={number}
        onChange={(e) => setSetSearchParams({ n: e.target.value })}
      />
    </>
  );
}
