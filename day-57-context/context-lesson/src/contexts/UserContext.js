const { createContext } = require("react");

const UserContext = createContext(null);

// Provider
// Сүү ХХК байж болно. Иргэдэд сүү ханган нийлүүлдэг.

const UserProvider = ({ children }) => {
  const userName = "Tsogtoo";
  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

//Consumer
// Жирийн иргэд болон хэрэглэгчид
