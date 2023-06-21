import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/SKIDS_Health_Assig/" element={<Home />} />
        <Route path="/adduser" element={<Form />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
