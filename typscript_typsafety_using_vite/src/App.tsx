import Persons from "./Persons";
import { Country } from "./Persons";

function App() {
  const getAge = (name: string) => {
    return "24";
  };

  console.log(typeof getAge("arun"));
  return (
    <div className="App">
      <Persons
        name={"arun"}
        Age={24}
        isMarried={false}
        friends={["Deshan", "Riya", "Nimal", "Danny"]}
        country={Country.japan}
      />
    </div>
  );
}

export default App;
