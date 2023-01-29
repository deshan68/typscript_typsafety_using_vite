import { useState } from "react";
import Persons from "./Persons";
import PropTypes from "prop-types";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Persons
        name={3}
        Age={24}
        isMarried={false}
        friends={["Deshan", "Riya", "Nimal", "Danny"]}
      />
    </div>
  );
}
Persons.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};

export default App;
