import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="page">
        <Routes>
          <Route index element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
