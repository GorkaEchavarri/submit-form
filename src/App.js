import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import SuccessMessage from './components/SuccessMessage';

function App() {

  const [showSuccess, setShowSuccess] = useState(false);

  function toggleSuccess() {
    setShowSuccess(true);
    setTimeout(() => {setShowSuccess(false);}, 3000);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Form onFormSubmit={toggleSuccess}/>
      {showSuccess && <SuccessMessage />}
    </div>
  );
}

export default App;
