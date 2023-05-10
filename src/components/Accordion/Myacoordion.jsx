import React, {useState} from 'react'
import "./accordion.css";
const Myacoordion = ({question, answer }) => {
    const [show, setShow] = useState(false);
  return (
    <>
    
    <div className="faq-parent-container">
    <div className="main-heading">
       
       <h5>{question}</h5>
       <p onClick={()=> setShow(!show)}> {show?  "–": "+"} </p>
   </div>
   {
     show &&  <p className='answer'>{answer}</p>  
   }

    </div>

    
    </>
  )
}

export default Myacoordion