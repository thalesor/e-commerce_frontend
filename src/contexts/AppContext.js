import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => useContext(Context);

export default Context;
