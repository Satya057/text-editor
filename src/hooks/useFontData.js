import { useState, useEffect } from 'react';
import fontData from '../assets/fonts.json';

export const useFontData = () => {
  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    setFonts(fontData);
  }, []);

  return fonts;
};
