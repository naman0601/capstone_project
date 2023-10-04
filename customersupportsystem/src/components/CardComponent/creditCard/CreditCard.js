import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  name,
  type,
  number,
  balance,
  cardHolder,
  expiry,
  cvv,
  bgColor,
}) => {
  return (
    <div className="cards" style={{ backgroundColor: bgColor }}>
      <div className="top">
        <div className="left">
          <img src={`/creditcardimg/${name}.png`} alt={name} />
          <h2>{name}</h2>
        </div>
        <div className="right">
          <img src={`/creditcardimg/visa.png`} alt="" className="right" />
          <img src={`/creditcardimg/card chip.png`} className="chip" alt="" />
        </div>
      </div>
      <div className="middle">
        <h4>{number}</h4>
        <h2>{balance}</h2>
      </div>
      <div className="bottom">
        <div className="left">
          <small>Card Holder</small>
          <h5>{cardHolder}</h5>
        </div>
        <div className="right">
          <div className="expiry">
            <small>Expiry</small>
            <h5>{expiry}</h5>
          </div>
          <div className="cvv">
            <small>CVV</small>
            <h5>{cvv}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
