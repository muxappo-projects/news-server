import { createContext, useState } from "react";

export const Loading = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Loading.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </Loading.Provider>
  );
}
