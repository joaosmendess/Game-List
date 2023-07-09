import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<Login UserEmail={""} UserPassword={""} />} />
      <Route path="/register" element={<Register UserEmail={""} UserPassword={""} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;