import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmPassword from './components/ConfirmPassword.jsx';
import { Main } from './components/Main.jsx';
import Events from './components/Events';
import RaiseQuery from "./components/RaiseQuery";
import { MorningMenu } from './components/MorningMenu.jsx';
import { AfternoonMenu } from './components/AfternoonMenu.jsx';
import { LostandFound } from './components/LostandFound.jsx';

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
          <Route path="/raisequery" element={<RaiseQuery />} />
          <Route path="/morningmenu" element={<MorningMenu />} />
          <Route path="/afternoonmenu" element={<AfternoonMenu />}/>
          <Route path="/lostandfound" element={<LostandFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
