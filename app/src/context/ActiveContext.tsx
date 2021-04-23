import React, { useState, ReactElement } from "react";
interface ActiveContextType {
  symbol: string;
  changeSymbol: (symbol: string) => void;
}

export const ActiveContext = React.createContext<ActiveContextType>(
  {
    symbol: "ACME",
    changeSymbol: (symbol) => null,
  }
);

interface ChildProps {
  children: any;
}

export const ActiveContextProvider: React.FC<ChildProps> = ({
  children,
}): ReactElement => {
  const [symbol, changeSymbol] = useState("ACME");
  return (
    <ActiveContext.Provider
      value={{ symbol, changeSymbol }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

/*
interface UiContextType {
    modal: string;
    changeModal: (name: string) => void
}

export const UiContext = React.createContext<UiContextType>({ modal: '', changeModal: (name) => null });

interface ChildProps {
    children: any
};

export const UiContextProvider: React.FC<ChildProps> = ({ children }):ReactElement => {
    const [ modal, changeModal ] = useState('');

    return (
        <UiContext.Provider value={{ modal, changeModal }}>
            {children}
        </UiContext.Provider>
    )
}
*/
