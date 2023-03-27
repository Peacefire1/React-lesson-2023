const { createContext, useState, useEffect } = require("react");

const NeighborhoodContext = createContext(null);

const NeighborhoodProvider = ({ children }) => {
  const ALL_NEIGHBORHOOD_URL = "http://localhost:8080/restaurant/neigborhoods";

  const [neighborhoods, setNeighborhoods] = useState([]);

  async function fetchNeighborhood(url) {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhoods(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchNeighborhood(ALL_NEIGHBORHOOD_URL);
  }, []);
  return (
    <NeighborhoodContext.Provider value={neighborhoods}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodProvider };
// const RestaurantContext = createContext(null);

// const RestaurantProvider = ({ children }) => {
//   const ALL_RESTAURANT_URL = "http://localhost:8080/restaurant/restaurants";

//   const [restaurants, setRestaurants] = useState([]);

//   async function fetchRestaurants(url) {
//     const FETCHED_DATA = await fetch(url);
//     const FETCHED_JSON = await FETCHED_DATA.json();
//     setRestaurants(FETCHED_JSON.data);
//   }

//   useEffect(() => {
//     fetchRestaurants(ALL_RESTAURANT_URL);
//   }, []);
//   console.log(restaurants);
//   return (
//     <RestaurantContext.Provider value={restaurants}>
//       {children}
//     </RestaurantContext.Provider>
//   );
// };

// export { RestaurantContext, RestaurantProvider };
