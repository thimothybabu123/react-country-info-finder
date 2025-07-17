import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./component/SearchPage";
import CountryDetails from "./component/CountryDetails";
import Header from "./component/Header";
import About from "./component/About";

// to run install react-router-dom npm install react-router-dom
// install bootstrap for styling npm install bootstrap
// import "bootstrap/dist/css/bootstrap.min.css"; in src/index.js

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/country/:name" element={<CountryDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
