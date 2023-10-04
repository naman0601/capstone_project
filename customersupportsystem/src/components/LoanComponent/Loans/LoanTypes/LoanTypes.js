import React from 'react';
import './LoanTypes.css'; // Create a CSS file for custom styles
import el from './assets/education_loan.jpg';
import pl from './assets/personal_loan.jpg';
import vl from './assets/vehicle_loan.jpg';
import hl from './assets/home_loan.jpg';

import { useState } from 'react';
 import Popup from './Popup';
// import MyContextProvider from 'react'

const LoanTypes = () => {
  const [isClick , setonClick]=useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    
    <div className="container">
                  <div className="btn-cont">
              <button className="btn-custom">LOANS</button>
            </div>
    
      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <div className="loan-card">
            <img src={pl} alt="Loan Type 1" className="img-fluid loan-image" />
            <div className="overlay">
              <button onClick={()=>setonClick(!isClick)} className="btn btn-primary">Read More</button>
            </div>
            {isClick && (
            <p>
            Initialization Order: Make sure that the component causing the error is not being rendered before the context provider is initialized. Ensure that the context is available when the component is being used.
Check for Null or Undefined Values: Ensure that the context or state variable you are trying to access with useContext is not null or undefined at the time of access. You can add conditional checks to handle such cases gracefully.

Hot Module Replacement (HMR): The error message you provided contains references to hot module replacement (
            </p>
)}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="loan-card">
            <img src={hl} alt="Loan Type 2" className="img-fluid loan-image" />
            <div className="overlay">
            <button onClick={handleReadMore} className="btn btn-primary">Read More</button>
              
              </div>
              {expanded && <Popup onClose={handleClose} />}
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <div className="loan-card">
            <img src={el} alt="Loan Type 3" className="img-fluid loan-image" />
            <div className="overlay">
              <button onClick={handleReadMore} className="btn btn-primary">Read More</button>
              
            </div>
            {expanded && <Popup onClose={handleClose} />}
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="loan-card">
            <img src={vl} alt="Loan Type 4" className="img-fluid loan-image" />
            <div className="overlay">
            <button onClick={handleReadMore} className="btn btn-primary">Read More</button>
              
              </div>
              {expanded && <Popup onClose={handleClose} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTypes;
