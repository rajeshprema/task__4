import Header from "./Components/Header";


import Update from "./Components/Update/index";
import Read from "./Components/Read/index";
import Create from "./Components/Create/index";

import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="main">
      {/* //<Header />  */}
      <h1>CURD Application</h1>
    
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
