import React, { createContext, useState } from 'react';

// Create a new context
const PcBuilderContext = createContext();
const initialData = {
    // category: "",
    products: []
}
// Create a context provider component
const PcBuilderContextProvider = ({ children }) => {

  const [pcBuildDetail, setPcBuildDetail] = useState(initialData);

  // Add any state or functions you want to expose to the consumer components

  return (
    <PcBuilderContext.Provider value={{ pcBuildDetail, setPcBuildDetail }}>
      {children}
    </PcBuilderContext.Provider>
  );
};

export { PcBuilderContext, PcBuilderContextProvider };
