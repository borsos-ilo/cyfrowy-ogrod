import { useCallback } from 'react';

const rainbowColors = [
  '#2db1ba', // Morski
  '#6387cd', // Niebieski
  '#985de0', // Fiolet
  '#ac6cb0', // Brudny fiolet
  '#c07b80', // Brudny róz
  '#d48a50', // Morelowy
  '#e89820'  // Zółty
];

export const useRandomRainbowColor = () => {
  const getRandomColor = useCallback(() => {
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  }, []);

  return getRandomColor;
};