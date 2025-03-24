import React, { useState, useContext } from "react";
import "./styles.css";

const ThemeContext = React.createContext("dark");

function Comp1() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <Comp1 />
        <Comp2 />
      </div>
    </ThemeContext.Provider>
  );
}
