// src/frontend/App.jsx
import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <h1>AI Task Manager</h1>
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
