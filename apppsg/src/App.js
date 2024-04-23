import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmPassword from './components/ConfirmPassword.jsx';
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/confirmpassword" element={<ConfirmPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
