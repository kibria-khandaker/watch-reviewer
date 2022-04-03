import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
    </div>
  );
}

export default App;
