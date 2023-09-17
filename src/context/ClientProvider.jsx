import { createContext, useState, useContext } from "react";
import { createClientRequest } from "../api/clients.js";

const ClientContext = createContext();

export const useClients = () => {
  const context = useContext(ClientContext);

  if (!context) {
    throw new Error("useClients deberia ser usado con un ClientProvider");
  } else {
    return context;
  }
};

export function ClientProvider({ children }) {
  const [clients, setClients] = useState([]);

  const createClient = async (client) => {
    console.log("creaste un cliente!");
    const response = await createClientRequest(client);
    console.log(response);
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        createClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
