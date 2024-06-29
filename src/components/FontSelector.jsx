
import React, { useEffect, useState } from 'react';
import { useEditor } from '../context/EditorContext';
import fonts from '../assets/fonts.json';

const FontSelector = () => {
  const { state, dispatch } = useEditor();
  const [fontFamily, setFontFamily] = useState(state.fontFamily);

  useEffect(() => {
    setFontFamily(state.fontFamily);
  }, [state.fontFamily]);

  const handleFontChange = (e) => {
    const selectedFontFamily = e.target.value;
    const selectedFont = fonts.find(font => font.family === selectedFontFamily);

    if (selectedFont) {
      dispatch({
        type: 'SET_FONT_FAMILY',
        payload: { fontFamily: selectedFontFamily, variants: selectedFont.variants }
      });
    }
  };

  return (
    <select value={fontFamily} onChange={handleFontChange}>
      {fonts.map(font => (
        <option key={font.family} value={font.family}>{font.family}</option>
      ))}
    </select>
  );
};

export default FontSelector;
