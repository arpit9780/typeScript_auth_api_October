import React from "react";
import { Dashboard } from "../Components/Dashboard";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";

export const PrivateRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};
