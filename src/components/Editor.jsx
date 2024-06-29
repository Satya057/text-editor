import React from 'react';
import { useEditor } from '../context/EditorContext';

const Editor = () => {
  const { state, dispatch } = useEditor();

  const handleTextChange = (e) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_EDITOR' });
  };

  const handleSave = () => {
    dispatch({ type: 'SAVE_TEXT' });
  };

  return (
    <div style={{width:"60%", margin:"auto"}}>
      <textarea
        value={state.text}
        onChange={handleTextChange}
        style={{
          fontFamily: state.fontFamily,
          fontWeight: state.fontWeight,
          fontStyle: state.italic ? 'italic' : 'normal',
        }}
      />
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <h3>Saved Texts:</h3>
        <ul>
          {state.savedTexts.map((text, index) => (
            <li key={index}>{index + 1}. {text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Editor;
