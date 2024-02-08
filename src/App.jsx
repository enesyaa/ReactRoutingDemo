import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainpage from "./pages/mainpage/Mainpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Mainpage />
    </div>
  );
}

export default App;
