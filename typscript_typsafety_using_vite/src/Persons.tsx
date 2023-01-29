interface Props {
  name: string;
  Age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  srilanka = "SriLanka",
  america = "America",
  japan = "Japan",
}
export default function Persons(props: Props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.Age}</h1>
      <h1>
        {props.name} {props.isMarried ? "is" : "Is NOT"} Married
      </h1>
      {props.friends.map((item) => {
        return <h1 key={item}>{item}</h1>;
      })}
      <h1>Counrty: {props.country}</h1>
    </div>
  );
}
