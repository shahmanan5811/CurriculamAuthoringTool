import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './stylesheets/task.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo subjectName="mathematics"/>
    </div>
  );
}

export default App;
