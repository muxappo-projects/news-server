import { createContext, useState } from "react";

export const User = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <User.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </User.Provider>
  );
}
