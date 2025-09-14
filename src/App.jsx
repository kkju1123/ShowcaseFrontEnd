import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Sidebar from "./sidebar/navigation.jsx";
import Content from "./content/currentContent.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="homepage">
      <div className="sidebar">
        <div className="sideContent">
      <Sidebar />
      </div>
      </div>

      <div className="content">
      <Content />
      </div>
    </div>
  );
}

export default App;
