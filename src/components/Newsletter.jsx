import React from 'react'
import "./newsletter.css";
import Bgnews from "../assets/Background.png";
const Newsletter = () => {
  return (
    <>
      <div className="newsletter-parent-container">

        <div className="sub-newsletter-container">
            <div className="heading-container">
              <h3>Subscribe our Newsletters</h3>
              <p>Fill below details to stay updated with our startup community and get the latest news in the ecosystem.</p>
            </div>
            <div className="signup-container">
                        <form className='newslettercontainer'>
                            <input type="Your name" placeholder="Your name" className="name-container"/> 
                            <input type="Your email" placeholder="Your email" className="your-email"/> 
                            <button type="Sign Up" className="sign-up-container p-3 ">Sign Up</button>
                        </form>
            </div>
            <div className="bottom-container">
              <p>By subscribing, you agree to the Terms of Service</p>
            </div>
        </div>


      </div>
    </>
  )
}

export default Newsletter