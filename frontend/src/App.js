import React from 'react';
import './App.css';
import SubmissionForm from './components/SubmissionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Good Morning!</h1>
        <p>Please fill out the form below.</p>
        <SubmissionForm />
      </header>
    </div>
  );
}

export default App;
