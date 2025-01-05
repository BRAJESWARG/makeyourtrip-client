import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { DataBase } from './Components/ArrayOfBlog/ArrayOfBlog';
import Home from "./Components/Home-Section/Home";
import AllCategory from "./Components/AllCategory"
import Nav from "./Components/Nav/Nav.js";
import Footer from './Components/Home-Section/Footer/Footer';
import NotFound from "./Components/Home-Section/Not Found/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
// import HotelSearch from './Components/HotelSearch/HotelSearch.js';


function App() {
  return (
    // <DataBase>
    <Router>
      <div className="App">
        <Nav />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {
            // <Route path="/hotelsearch" element={<HotelSearch />} />
          }
          <Route path="/:cat" element={<AllCategory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    // </DataBase>
  );
}

export default App;