import { useState } from "react";
import "./App.css";

function App() {
  const purple = "#8e44ad";

  const [Bg, setColor] = useState(purple);
  const [named, Setname] = useState("Click Me");

  const BgUpdate = () => {
    // console.log("clicked");
    const newColor = "#34495e";
    setColor(newColor);
    Setname("Oocchh !!");
  };
  const BgChange = () => {
    setColor(purple);
    const Emoj = "Ayyo 😠";
    Setname(Emoj);
  };

  return (
    <div style={{ backgroundColor: Bg }}>
      <button onClick={BgUpdate} onDoubleClick={BgChange}>
        {named}
      </button>
    </div>
  );
}

export default App;
