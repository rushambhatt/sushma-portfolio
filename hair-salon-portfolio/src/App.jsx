import PhotoCard from "./components/PhotoCard"
import Home from "./pages/Home"
import {Routes, Route} from "react-router-dom"
import './App.css'
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Contact />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
