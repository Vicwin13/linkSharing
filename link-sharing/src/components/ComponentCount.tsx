"use client";

import React, { createContext, useContext, useState } from "react";

interface ComponentCountContextType {
  count: number;
  incrementCount: () => void;
}

const ComponentCountContext = createContext<
  ComponentCountContextType | undefined
>(undefined);

const ComponentCountProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ComponentCountContext.Provider value={{ count, incrementCount }}>
      {children}
    </ComponentCountContext.Provider>
  );
};

const ComponentCount = () => {
  const context = useContext(ComponentCountContext);
  if (!context) {
    throw new Error(
      "ComponentCount must be used within a ComponentCountProvider"
    );
  }

  return context;
};

export { ComponentCountProvider, ComponentCount };
