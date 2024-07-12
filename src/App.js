import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/authapp.scss";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useRef } from "react";
import authAPI from "./components/AuthAPI";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { HomeApp } from "./components2/HomeApp";

function App() {
  const authRef = useRef(authAPI());
  const loginStatus = useSelector((state) => state.AUTH.isLoggedIn);
  console.log(loginStatus);

  if (!loginStatus) {
    return (
      <div className="main-div">
        <img src="123.jpeg" alt="logo" />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="signup"
              element={
                <div className="container">
                  <Signup auth={authRef.current} />
                </div>
              }
            />
            <Route
              path="login"
              element={
                <div className="container">
                  <Login auth={authRef.current} />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeApp />} />
        </Routes>
      </BrowserRouter>
    );
  }
 

}

export default App;
