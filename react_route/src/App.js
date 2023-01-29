import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BookList from "./BookList";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import BookLayOut from "./BookLayOut";
import BookRoutes from "./BookRoutes";
import "./Style.css";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              state={"Hi"}
              to={"/"}
              // replace
              // reloadDocument
              // style={({ isActive }) => {
              //   return isActive ? { color: "red" } : { color: "green" };
              // }}
            >
              {/* Home */}
              {({ isActive }) => {
                return isActive ? "Active Home" : "Not Active Home";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink end to={"/books"}>
              Book
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.state}
    </>
  );
}

export default App;
