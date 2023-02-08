import { getImageUrl } from "../utils/utils";
import { createContext, useContext } from "react";
import { ImageContext } from "../context/context";
export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      style={{ width: imageSize + "px", height: imageSize + "px" }}
    />
  );
}
