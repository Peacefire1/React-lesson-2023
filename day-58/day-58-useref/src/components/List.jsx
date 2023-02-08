import { places } from "../data/Data";
import Place from "./Place";

export default function List() {
  return (
    <div>
      {places.map((place, index) => {
        return <Place key={index} place={place} />;
      })}
    </div>
  );
}
