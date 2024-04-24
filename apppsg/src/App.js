import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmPassword from './components/ConfirmPassword.jsx';
import { Main } from './components/Main.jsx';
import Events from './components/Events';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/forgotpassword" element={<ForgotPassword />} />
          <Route path="/confirmpassword" element={<ConfirmPassword />} />
          <Route path="/main" element={<Main />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
