import { useState } from "react";
import Header from "./components/Header";
import { PersonList } from "./components/PersonList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;
