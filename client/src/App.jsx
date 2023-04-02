import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import "./App.css";
import MasterLayout from "./components/layouts/MasterLayout/MasterLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const tryLogin = () => {
      const userData = localStorage.getItem("userData");
      const parsedData = JSON.parse(userData);
      if (!userData) {
        console.log("no data found");
        return <Route path="/" element={<Navigate to="/login" replace />} />;
      }
      const { user, token } = parsedData;

      if (!token || !user) {
        return <Route path="/" element={<Navigate to="/login" replace />} />;
        //TODO: Delete auth data in local  storage
      }
      setIsLoggedIn(true);
    };
    tryLogin();
  }, []);

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
              <Route path="mui-master-layout" element={<MasterLayout />} />
              <Route
                path="signup"
                element={<Navigate to="/register" replace />}
              />
              <Route path="signin" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Fragment>
          </Routes>
        )}

        {/* {isLoggedIn && (
          <Fragment>
            <div className="pages">
              <SideBar />
              <Routes>
                <Route
                  path="chat"
                  element={
                    <div className="pages__component">
                      <Header title={"Chat"} />
                      <Chat socket={socket} />
                    </div>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <div className="pages__component">
                      <Header title={"Profile"} />
                      <Profile />
                    </div>
                  }
                />
                <Route
                  path="settings"
                  element={
                    <div className="pages__component">
                      <Header title={"Settings"} />
                      <Settings />
                    </div>
                  }
                />
                <Route path="/" element={<Navigate to="/chat" replace />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
              </Routes>
            </div>
          </Fragment>
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
