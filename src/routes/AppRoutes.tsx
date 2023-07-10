import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login UserEmail={""} UserPassword={""} />} />
      <Route path="/register" element={<Register UserEmail={""} UserPassword={""} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;