// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import BuildSection from "./pages/build/BuildDefenseSection.jsx";

function App() {
  const [sections, setSections] = useState("BUILD-DEFENSE");

  switch (sections) {
    case "BUILD-DEFENSE":
      return <BuildSection setAppSections={setSections} />;
    default:
      return <BuildSection setAppSections={setSections} />;
  }
}

export default App;
