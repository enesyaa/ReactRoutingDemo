import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainpage from "./pages/mainpage/Mainpage";
import Secondpage from "./pages/secondpage/Secondpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Secondpage />
    </div>
  );
}

export default App;
