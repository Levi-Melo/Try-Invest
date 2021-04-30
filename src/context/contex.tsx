import { useContext } from "react";
import { createContext, useState, ReactNode } from "react";

type ContextData = {
  isAdding: boolean;
  addButton: () => void;
};

type ContextProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as ContextData);

export function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  const [isAdding, setAdding] = useState(false);

  function addButton() {
    setAdding(!isAdding);
  }
  return (
    <Context.Provider
      value={{
        addButton,
        isAdding,
      }}
    >
      {children};
    </Context.Provider>
  );
}
export const useMenu = () => {
  return useContext(Context);
};
