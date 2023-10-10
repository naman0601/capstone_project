import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreditScoreProgressBar from './ProgressBar/ProgressBar';
import CreditCard from '../../CardComponent/creditCard/CreditCard';
import creditCardData from '../../CardComponent/choosecardsection/creditCardData.json';
import { Link } from 'react-router-dom';

const CredRatingandCard = () => {
  const userId = localStorage.getItem('userId');
  const [userCardData, setUserCardData] = useState({});
  const [card, setCard]=useState({});
  
  useEffect(() => {
    const fetchUserCardData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:9002/cardinfo/${userId}`);
        const cardData = userResponse.data;
        setUserCardData(cardData);
        // const userCardId = cardData.creditCardId;
        setCard(creditCardData.card.find(card => card.id === cardData.creditCardId));
        console.log(card);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchUserCardData();
  }, []);
  console.log(userCardData);
  return (
    <section className="container-fluid" style={{ marginBottom: '4.5rem', marginTop: '4rem' }}>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <CreditScoreProgressBar creditScore={780} />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" /*style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px' }}*/>
          {userCardData.creditCardId ? (
            <CreditCard
              cardname={card.cardname}
              type={card.type}
              number={userCardData.cardNumber}
              balance={userCardData.cardBalance}
              cardHolder={userCardData.name}
              expiry={userCardData.expiryDate}
              cvv="XXX"
              bgColor={card.bgColor}
            />
          ) : (
            <Link to="/card">Apply for credit card</Link>
          )}
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="total-credit">
            <h1>Total Credit Allowed:</h1>
            <h2>1,49,000</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredRatingandCard;
