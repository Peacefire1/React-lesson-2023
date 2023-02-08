import PlaceImage from "./PlaceImage";

export default function Place({ place }) {
  return (
    <p>
      <PlaceImage place={place} />
      <br />
      <b>
        {place.name} <br />
        {":" + place.description}
      </b>
    </p>
  );
}
