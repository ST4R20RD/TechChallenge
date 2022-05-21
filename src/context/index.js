import { createContext, useState, useEffect } from "react";
import { client } from "client";

export const PhoneContext = createContext();

export function PhoneContextProvider({ children }) {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPhones = async () => {
    try {
      const response = await client.get("/phones");
      setPhones(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhones();
  }, []);

  const value = {
    phones,
    loading,
  };

  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
}


