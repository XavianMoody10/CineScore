import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <NavigationContext.Provider
      value={{ isNavigationOpen, setIsNavigationOpen }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
