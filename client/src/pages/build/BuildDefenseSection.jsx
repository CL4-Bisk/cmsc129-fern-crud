import "./BuildDefenseSection.css";
import { useState } from "react";
import axios from "axios";
import BuildList from "../../components/BuildList/BuildList.jsx";
import ItemList from "../../components/ItemList/ItemList.jsx";


function BuildDefenseSection({ setAppSections }) {
  const [defense, setDefense] = useState("none");
  const [defenseName, setDefenseName] = useState("");
  const [defenseDescription, setDefenseDescription] = useState("");

  const handleSave = async () => {
    if (!defenseName.trim()) {
      alert("Please enter a build name!");
      return;
    }

    const newBuild = {
      name: defenseName,
      type: defense,
      description: defenseDescription,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/builds", newBuild);

      if (response.ok) {
        alert("Defense Saved!");
        // Refresh the page or update state here
        setDefenseName("");
        setDefense("none");
        setDefenseDescription("");
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save defense. Please try again.");
    }
  };

  return (
    <div className="build-defense-section">
      <h2>Build Defense</h2>
      
      <div className="form-group">
        <label>Build Name:</label>
        <input 
          type="text" 
          placeholder="Enter build name"
          value={defenseName} 
          onChange={(e) => setDefenseName(e.target.value)} 
        />
        
        <label>Type:</label>
        <select value={defense} onChange={(e) => setDefense(e.target.value)}>
          <option value="none">None</option>
          <option value="armor">Physical Defense</option>
          <option value="shield">Magical Defense</option>
          <option value="hybrid">Hybrid Defense</option>
        </select>

        <ItemList />

        <button onClick={handleSave}>Save Defense</button>
      </div>

      <button onClick={() => setAppSections("HOME")}>Back</button>

      <hr />
      {/* 3. YOU MUST ADD THIS TAG TO SEE THE LIST ON SCREEN */}
      <BuildList /> 
    </div>
  );
}

export default BuildDefenseSection;