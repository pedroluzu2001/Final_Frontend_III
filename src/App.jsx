import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";  // Las páginas que necesites
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Context/GlobalContext";  // Contexto global

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
