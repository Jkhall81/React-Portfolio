import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
