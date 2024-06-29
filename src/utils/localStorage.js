export const saveState = (state) => {
  localStorage.setItem('editorState', JSON.stringify(state));
};

export const loadState = () => {
  const serializedState = localStorage.getItem('editorState');
  return serializedState ? JSON.parse(serializedState) : undefined;
};

export const saveTextArray = (texts) => {
  localStorage.setItem('savedTexts', JSON.stringify(texts));
};

export const loadTextArray = () => {
  const serializedTexts = localStorage.getItem('savedTexts');
  return serializedTexts ? JSON.parse(serializedTexts) : [];
};
