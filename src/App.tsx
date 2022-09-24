import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar";
import Introduction from "./pages/Introduction";
import Background from "./components/Background";
import { useState } from "react";
import { PagesContext } from "./context/PagesContext.js";

function App() {
  const [backgroundConfig, setBackgroundConfig] = useState({
    hidePetsDecoration: true,
    hidePatDecoration: true,
  });

  return (
    <PagesContext.Provider value={{ backgroundConfig, setBackgroundConfig }}>
      <Background backgroundConfig={backgroundConfig}>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Background>
    </PagesContext.Provider>
  );
}

export default App;
