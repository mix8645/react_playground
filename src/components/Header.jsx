import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [theme, setTheme] = useState(true);
  return (
    <nav>
      <h1>Cat Profile</h1>
      <button onClick={()=> setTheme(!theme)}>{theme ? "Light" : "Dark"}</button>
    </nav>
  );
}

export default Header;