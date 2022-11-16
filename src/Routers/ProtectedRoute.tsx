import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../Components/AdminDashboard";
import { AdminSeePosts } from "../Components/AdminSeePosts";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";

export const ProtectedRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/adminSeePosts" element={<AdminSeePosts />} />
      </Routes>
    </div>
  );
};
