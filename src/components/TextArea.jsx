import React from 'react';
import { useEditor } from '../context/EditorContext';

const TextArea = ({ value, onChange }) => {
  const { state } = useEditor();

  const style = {
    fontFamily: state.fontFamily,
    fontWeight: state.fontWeight,
    fontStyle: state.italic ? 'italic' : 'normal',
  };

  return (
    <textarea style={style} value={value} onChange={onChange} />
  );
};

export default TextArea;
