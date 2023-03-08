import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AppBar from './components/Appbar';
// import { Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { Home } from './pages/Home';
import { Investor } from './pages/Investor';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Mentors } from './pages/Mentors';
// import MentorConnect from './pages/MentorConnect';
import MentorConnect from './pages/MentorConnect2';
import MentorProfile from './pages/MentorProfile2';
import { Login } from './pages/Login';
import { LoginMentor } from './pages/LoginMentor';
import { useEffect } from 'react';
import { Signup } from './pages/Signup';
import MeetingForm from './pages/MeetingForm';
import { AboutUpdate } from './pages/AboutUpdate';
import User from './components/Dashboard/User';
import Mentor from './components/Dashboard/Mentor';
import { Register } from './pages/Register';
import MockDash from './components/Dashboard/MockDash';
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
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/investor' element={<Investor />}/>
          <Route path="/aboutus" element={<AboutUpdate />} />
          <Route path="/team" element={<About />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="/mentors" element={<MentorConnect />} />
          <Route path="/profile/:id" element={<MentorProfile />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/loginMentor" element={<LoginMentor />} />
          <Route path="/user/login/:id" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/meeting" element={<MeetingForm />} />
          <Route path="/Dashboard" element={user ? <User /> : <Home />} />
          <Route path="/Dashboard/Mentor" element={user ? <Mentor /> : <Home />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/mockDash" element={<MockDash/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
