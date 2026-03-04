import "./HomeSection.css";

import { useState } from "react";
import { getCurrentUser, onAuthStateChangedListener, signInAnonymouslyUser } from "../../../../server/firebase/firebase.js";

const auth = getCurrentUser();

function HomeSection({ setAppSections }) {
  const [user, setUser] = useState(getCurrentUser());

  onAuthStateChangedListener((user) => {
    if (user) {
      setUser(user);
    } else {
      signInAnonymouslyUser()
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.error("Error signing in anonymously:", error);
        });
    }
    
  });

  return (
    <div className="home-section">
      <h2>Home</h2>
      <p>UID: {user ? getCurrentUser().displayName : "None"}</p>
      <button onClick={() => setAppSections("BUILD-DEFENSE")}>Build Defense</button>
    </div>
  );
}

export default HomeSection;
