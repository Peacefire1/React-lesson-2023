import { useContext } from "react";
import { NeighborhoodContext } from "../context/neighborhood.context";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
const center = [51.505, -0.09];
const redOptions = { color: "red" };

export default function Apolygon() {
  const neigborhoods = useContext(NeighborhoodContext);
  console.log(neigborhoods);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {neigborhoods.map((e) => {
        return (
          <CircleMarker
            center={[
              e.geometry.coordinates[0][0][1],
              e.geometry.coordinates[0][0][0],
            ]}
            pathOptions={redOptions}
            radius={20}
          ></CircleMarker>
        );
      })}
    </MapContainer>
  );
}
