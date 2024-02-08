import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainpage from "./pages/mainpage/Mainpage";
import Secondpage from "./pages/secondpage/Secondpage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/posts" element={<Secondpage />} />
      </Routes>
    </div>
  );
}

export default App;
