import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './LoanTypes.css'; // Custom CSS file for additional styling
import el from './assets/education_loan.jpg';
import pl from './assets/personal_loan.jpg';
import vl from './assets/vehicle_loan.jpg';
import hl from './assets/home_loan.jpg';

const cardsData = [
  {
    id: 1,
    loanName: 'Personal Loan',
    totalInterestRate: '8%',
    loanType: 'Personal Purposes only',
    imageUrl: pl,
  },
  {
    id: 2,
    loanName: 'Education Loan',
    totalInterestRate: '6%',
    loanType: 'For Students and Educational Purpose only',
    imageUrl: el,
  },
  {
    id: 3,
    loanName: 'Home loan',
    totalInterestRate: '4%',
    loanType: 'Build Your dream house today ',
    imageUrl: hl,
  },
  {
    id: 4,
    loanName: 'Vehicle Loan',
    totalInterestRate: '7%',
    loanType: 'Buy your first car today',
    imageUrl: vl,
  },
];

const LoanTypes = () => {
  const [showText, setShowText] = useState({});

  const toggleText = (id) => {
    setShowText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card) => (
          <div className="col-md-6 col-lg-3" key={card.id}>
            <div className="card mb-4 ">
              <img
                src={card.imageUrl}
                className="card-img-top img-fluid si"
                alt={card.loanName}
              />
              <div className="card-body">
                <button 
                  className="btn btn-primary btn-block"
                  onClick={() => toggleText(card.id)}
                  style={{background:'#652cb3'}}
                >
                  {showText[card.id] ? 'Close' : 'Read More'}
                </button>
                {showText[card.id] && (
                  <div style={{color:'#652cb3'}}> 
                    <h5 className="card-title">{card.loanName}</h5>
                    <p className="card-text">Total Interest Rate: {card.totalInterestRate}</p>
                    <p className="card-text">Need: {card.loanType}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanTypes;
