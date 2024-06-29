import React, { createContext, useReducer, useEffect } from 'react';
import { saveState, loadState, saveTextArray, loadTextArray } from '../utils/localStorage';
import { findClosestWeight } from '../utils/fontUtils';

const EditorContext = createContext();

const initialState = {
  text: '',
  fontFamily: 'Roboto',
  fontWeight: '400',
  italic: false,
  savedTexts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_FONT_FAMILY':
      const { fontFamily, variants } = action.payload;
      const currentWeight = state.fontWeight;
      const currentItalic = state.italic;
      const closestVariant = findClosestWeight(currentWeight, variants, currentItalic);
      return { 
        ...state, 
        fontFamily, 
        fontWeight: closestVariant.weight.toString(), 
        italic: closestVariant.italic 
      };
    case 'SET_FONT_WEIGHT':
      return { ...state, fontWeight: action.payload };
    case 'TOGGLE_ITALIC':
      return { ...state, italic: !state.italic };
    case 'RESET_EDITOR':
      return { ...state, text: '' };
    case 'SAVE_TEXT':
      const newSavedTexts = [...state.savedTexts, state.text];
      saveTextArray(newSavedTexts);
      return { ...state, savedTexts: newSavedTexts };
    default:
      return state;
  }
};

export const EditorProvider = ({ children }) => {
  const loadedState = loadState() || initialState;
  const [state, dispatch] = useReducer(reducer, {
    ...loadedState,
    savedTexts: loadTextArray() || [],
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => React.useContext(EditorContext);
