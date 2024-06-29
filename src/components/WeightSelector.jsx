import React from 'react';
import { useEditor } from '../context/EditorContext';
import fonts from '../assets/fonts.json';

const WeightSelector = () => {
  const { state, dispatch } = useEditor();

  const handleWeightChange = (e) => {
    dispatch({ type: 'SET_FONT_WEIGHT', payload: e.target.value });
  };

  const currentFont = fonts.find((font) => font.family === state.fontFamily);
  const weights = currentFont ? currentFont.variants.filter((variant) => !variant.includes('italic')) : [];

  return (
    <select value={state.fontWeight} onChange={handleWeightChange}>
      {weights.map((weight) => (
        <option key={weight} value={weight}>
          {weight}
        </option>
      ))}
    </select>
  );
};

export default WeightSelector;
