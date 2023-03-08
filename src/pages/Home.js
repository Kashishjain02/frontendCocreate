import React from 'react';
import AppBar from '../components/Appbar';
// import Content from '../components/Content';
import Content from '../components/Content2';
import Footer from '../components/Footer';
export const Home = () => {
  return (
    <>
      <AppBar />
      <div style={{ display: 'block', background: 'linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)' }}>
        {/* <AppBar /> */}
        <Content />
        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  )
}
