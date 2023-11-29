// PaletteContext.js
import React, { createContext, useContext } from 'react';
import { palette } from './palette';

const PaletteContext = createContext();

export const usePalette = () => {
  return useContext(PaletteContext);
};

export const PaletteProvider = ({ children }) => {
  return (
    <PaletteContext.Provider value={palette}>
      {children}
    </PaletteContext.Provider>
  );
};
