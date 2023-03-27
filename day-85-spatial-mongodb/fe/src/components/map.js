import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { RestaurantContext } from "../context/restaurants.context";

export default function Map() {
  const restaurant = useContext(RestaurantContext);
  console.log(restaurant);
  return (
    <div>
      <h1>My Map</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurant.map((e) => {
          return (
            <Marker position={[e.address.coord[1], e.address.coord[0]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
