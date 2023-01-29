import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import Content from "./Content";

function App() {
  const [section1TextColor, setSection1TextColor] = useState("black");
  const [section2TextColor, setSection2TextColor] = useState("black");
  const [section3TextColor, setSection3TextColor] = useState("black");
  const [section1BoxColor, setSection1BoxColor] = useState("");
  const [section2BoxColor, setSection2BoxColor] = useState("");
  const [section3BoxColor, setSection3BoxColor] = useState("");
  const [items, setitems] = useState([]);

  const fetchItems = async (API_URL) => {
    setitems([]);
    try {
      const response = await fetch(API_URL);
      const listItems = await response.json();
      setitems(listItems);
    } catch (err) {}
  };

  const handleUsers = () => {
    fetchItems("https://jsonplaceholder.typicode.com/users");
    setSection2TextColor("black");
    setSection3TextColor("black");
    setSection1TextColor("white");
    setSection1BoxColor("black");
    setSection2BoxColor("white");
    setSection3BoxColor("white");
  };
  const handlePosts = () => {
    fetchItems("https://jsonplaceholder.typicode.com/posts");
    setSection2TextColor("white");
    setSection3TextColor("black");
    setSection1TextColor("black");
    setSection1BoxColor("white");
    setSection2BoxColor("black");
    setSection3BoxColor("white");
  };
  const handleComments = () => {
    fetchItems("https://jsonplaceholder.typicode.com/comments");
    setSection3TextColor("white");
    setSection2TextColor("black");
    setSection1TextColor("black");
    setSection1BoxColor("white");
    setSection2BoxColor("white");
    setSection3BoxColor("black");
  };

  return (
    <div className="App">
      <Home
        handleUsers={handleUsers}
        handlePosts={handlePosts}
        handleComments={handleComments}
        section1TextColor={section1TextColor}
        section2TextColor={section2TextColor}
        section3TextColor={section3TextColor}
        section1BoxColor={section1BoxColor}
        section2BoxColor={section2BoxColor}
        section3BoxColor={section3BoxColor}
      />
      <Content items={items} />
    </div>
  );
}

export default App;
