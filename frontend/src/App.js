import React from 'react';
import './App.css';
import SubmissionForm from './components/SubmissionForm';

function App() {
  return (
    <div className="App">
      <main>
        <div className="App-header">
          <h1>Sunrise Submission</h1>
          <p>Start your day with a positive submission.</p>
        </div>
        <SubmissionForm />
      </main>
    </div>
  );
}

export default App;
