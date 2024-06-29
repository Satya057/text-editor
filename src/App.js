

// src/App.js

import React from 'react';
import Editor from './components/Editor';
import FontSelector from './components/FontSelector';
import WeightSelector from './components/WeightSelector';
import ItalicToggle from './components/ItalicToggle';
import { EditorProvider } from './context/EditorContext';
import './App.css';

function App() {
  return (
    <EditorProvider>
      <div className="App">
        <h1> SimpleText Editor</h1>
        <FontSelector />
        <WeightSelector />
        <ItalicToggle />
        <Editor />
      </div>
    </EditorProvider>
  );
}

export default App;
