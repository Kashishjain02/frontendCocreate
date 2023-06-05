import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';
// import AppBar from './components/Appbar';
// import { Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
// import { Landing } from './pages/Home';
// import { Investor } from './pages/Investor';
// import { About } from './pages/About';
// import { Team } from './pages/Team';
// import { Mentors } from './pages/Mentors';
// // import MentorConnect from './pages/MentorConnect';
import MentorConnect from './pages/MentorConnect.js';
// import MentorProfile from './pages/MentorProfile2';
// import { Login } from './pages/Login';
// import { LoginMentor } from './pages/LoginMentor';
import { useEffect } from 'react';
// import { Signup } from './pages/Signup';
import MeetingForm from './pages/MeetingForm';
// import { AboutUpdate } from './pages/AboutUpdate';
import User from './pages/User';
import Test from './pages/Test';
import {ZoomMeeting} from './pages/ZoomMeet'

// import Mentor from './components/Dashboard/Mentor';
// import { Register } from './pages/Register';
// import MockDash from './components/Dashboard/MockDash';
import "./App.css";
import { Landing } from "./pages/Landing";
import { SignInSide } from "./pages/Login.js";
import { Mentors } from "./pages/Mentors";
import { Mentor } from "./pages/Mentor";
import { Investor } from "./pages/Investor";
import { Connect } from "./pages/Connect";
import { About } from "./pages/About";
import { Register } from "./pages/Register";
import MentorProfile from './pages/MentorProfile';
import Apply from './pages/BookSession';
// import Footer from "./components/Footer";
// import AppBar from './components/Appbar';
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";



function App() {
  const loc = window.location.pathname;
  console.log();
  const user = localStorage.getItem('User');
  useEffect(() => {

  }, [loc]);
  return (
    <div >
      {/* <Header/> */}
      <BrowserRouter>
        {/* <AppBar /> */}
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route exact path="/mentors" element={<Mentors />} />
        <Route exact path="/mentor" element={<Mentor />} /> */}
        <Route exact path="/investor-connect" element={<Investor />} />
        <Route exact path="/grant-connect" element={<Connect />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/mentor" element={<MentorConnect />} />
        <Route exact path="/mentor-connect" element={<Mentor />} />
        <Route path="/profile/:id" element={<MentorProfile />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/meeting" element={<MeetingForm />} />
        <Route path="/Dashboard" element={<User />} />
        <Route path='/zoom' element={<ZoomMeeting />} />
        <Route path="/test" element={<Test />} />
          {/* <Route path='/home' element={<Landing />} />
          <Route path='/investor' element={<Investor />}/>
          <Route path="/aboutus" element={<AboutUpdate />} />
          <Route path="/team" element={<About />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="/mentors" element={<MentorConnect />} />
          
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/loginMentor" element={<LoginMentor />} />
          <Route path="/user/login/:id" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/meeting" element={<MeetingForm />} />
          <Route path="/Dashboard" element={<User />} />

          <Route path="/Dashboard/Mentor" element={<Mentor />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/mockDash" element={<MockDash/>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
