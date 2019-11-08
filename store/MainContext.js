import React, { createContext, useState } from 'react';

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [currentPoints, setPoints] = useState(1000);
  
  const clickHandler = () => {
    console.log("clickHandler");
  };

  return (
    <MainContext.Provider value={{ currentPoints, setPoints }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
