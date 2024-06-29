import React from 'react';
import { useEditor } from '../context/EditorContext';
import fonts from '../assets/fonts.json';

const ItalicToggle = () => {
  const { state, dispatch } = useEditor();

  const currentFont = fonts.find((font) => font.family === state.fontFamily);
  const italicAvailable = currentFont
    ? currentFont.variants.includes(`${state.fontWeight}italic`)
    : false;

  const handleToggleItalic = () => {
    if (italicAvailable) {
      dispatch({ type: 'TOGGLE_ITALIC' });
    }
  };

  return (
    <button onClick={handleToggleItalic} disabled={!italicAvailable}>
      Italic
    </button>
  );
};

export default ItalicToggle;
