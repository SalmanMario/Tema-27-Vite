import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Pagina despre mine.</h1>
      <h2>Ma numesc Salman Mario.</h2>
      <h2>Am 21 de ani.</h2>
      <h2>Imi place gaming-ul,muzica rock,anime-urile si fotbalul.</h2>

      <h6 className="findMe">Korn for Life</h6>
    </div>
  );
}

export default App;
