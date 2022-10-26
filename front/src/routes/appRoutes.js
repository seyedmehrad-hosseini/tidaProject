import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import Login from "../pages/login/login";

const AppRoutes = () => {
  const isLogin = !!localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isLogin ? <Navigate to="/login" /> : <Navigate to="/Home" />
            }
          />
          <Route
            path="/Home"
            element={!isLogin ? <Navigate to="/login" /> : <Home />}
          />
          <Route
            path="/login"
            element={isLogin ? <Navigate to="/Home" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
