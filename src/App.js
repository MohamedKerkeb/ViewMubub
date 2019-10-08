import React from "react";
import "./App.css";
import Advert from "./components/Advert/Advert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Mubub</h2>
        <nav>
          <ul>
            <li>Sign up</li>
            <li>Sign in</li>
          </ul>
        </nav>
      </header>
      <Advert />
    </div>
  );
}

export default App;
