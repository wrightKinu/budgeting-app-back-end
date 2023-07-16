import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from "./Components/Navbar";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:listIndex" element={<Show />} />
            <Route path="/transactions/:listIndex/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
