import { createContext, useState } from "react";

// To Create Context
export const AppContext = createContext();

// To Create Provider
export const AppProvider = ({ children, currentUser }) => {
  // to share this data across the components
  const [loggedIn, setLoggedIn] = useState(currentUser !== null);

  return (
    <AppContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};