import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "leaflet/dist/leaflet.css";
import { RestaurantProvider } from "./context/restaurants.context";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { NeighborhoodContext } from "./context/neighborhood.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

root.render(
  <React.StrictMode>
    <NeighborhoodContext>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </NeighborhoodContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
