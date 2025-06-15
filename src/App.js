import logo from './logo.svg';
import logo1 from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Restaurants from './pages/Restaurants';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
 
      <Router>
      <Header /> {/* 👈 Always shown on all pages */}
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

