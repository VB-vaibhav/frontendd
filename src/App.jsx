import React from 'react'
import Home from "./home/Home";
import Contacts from './contacts/Contacts';
import {Navigate,Route,Routes} from "react-router-dom"
import Courses from './courses/Courses';
import Publishs from './publishs/Publishs';
import Aboutus from './about/Aboutus'
import Signup from './components/Signup'
import { Toaster } from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white" >
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/publish" element={<Publishs />} />
          <Route path="/contact" element={<Contacts />} />
          
          {/* <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Toaster/>
    </div>
      
    </>
  
  )
}

export default App

