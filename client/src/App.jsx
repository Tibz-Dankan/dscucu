import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import "./App.css";
import MyProfile from "./components/UI/MyProfile/MyProfile";
import { useLoggedIn, useUpdateLoggedIn } from "./context/AuthContext";

function App() {
  const isLoggedIn = useLoggedIn();
  const updateLoggedIn = useUpdateLoggedIn(isLoggedIn);

  useEffect(() => {
    const tryLogin = () => {
      const authData = localStorage.getItem("auth");
      if (!authData) {
        console.log("no data found");
        return <Route path="/" element={<Navigate to="/login" replace />} />;
      }

      const parsedData = JSON.parse(authData);
      const { user, token } = parsedData;

      if (!token || !user) {
        localStorage.removeItem("auth");
        return <Route path="/" element={<Navigate to="/login" replace />} />;
      }
      updateLoggedIn(true);
    };
    tryLogin();
  }, [isLoggedIn, updateLoggedIn]);

  console.log("isLoggedIn");
  console.log(isLoggedIn);

  return (
    <div className="app">
      <BrowserRouter>
        {!isLoggedIn && (
          <Routes>
            <Fragment>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="signup"
                element={<Navigate to="/register" replace />}
              />
              <Route path="signin" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Fragment>
          </Routes>
        )}

        {isLoggedIn && (
          <Fragment>
            <Routes>
              <Fragment>
                <Route path="/" element={<MyProfile />} />
                <Route path="my-profile" element={<MyProfile />} />
                {/* <Route path="login" element={<Login />} /> */}
                {/* <Route path="profile" element={<Profile />} /> */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Fragment>
            </Routes>
          </Fragment>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
