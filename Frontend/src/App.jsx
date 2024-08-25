import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom";
import Services from './services/Services';
// import Login from './Login/login';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import WelcomePage from './components/WelcomePage';


function App() {
  return(
  <>
    <div className="dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/welcomePage" element={<WelcomePage />} />
        {/* <Route path="/login" element={<Login />}/> */}
        {/* <Route path="/aboutus" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/> */}
      </Routes>
    </div>

  </>
)
}

export default App
