import React, { createContext, useContext, useState } from "react";

interface AppContextInterface {
  departure: string;
  arrival: string;
  passengers: number;

  setDeparture: (departure: string) => void;
  setArrival: (arrival: string) => void;
  setPassengers: (passengers: number) => void;
}

export const AppContext = createContext<AppContextInterface>({
  departure: "",
  arrival: "",
  passengers: 0,

  setDeparture: () => {},
  setArrival: () => {},
  setPassengers: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [passengers, setPassengers] = useState(0);

  return (
    <AppContext.Provider
      value={{
        departure,
        arrival,
        passengers,
        setDeparture,
        setArrival,
        setPassengers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
