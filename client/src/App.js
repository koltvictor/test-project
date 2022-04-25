import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Testing from "./components/Testing";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
