import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Book from "./Book";
import NewBook from "./NewBook";
import BookList from "./BookList";
import BookLayOut from "./BookLayOut";

export default function BookRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BookLayOut />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
}
