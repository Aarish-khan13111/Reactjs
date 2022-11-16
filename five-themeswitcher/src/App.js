import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Togler from "./component/Togler";
import HeroSec from "./component/HeroSec";

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Togler />
        <HeroSec />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
