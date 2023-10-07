import React, { useState, useEffect } from 'react';
import './ChooseCardSection.css';
import CreditCard from '../creditCard/CreditCard';
import axios from 'axios';
import creditCardData from './creditCardData.json';

function ChooseCardSection() {
  const [selectedCardType, setSelectedCardType] = useState('All');
  const [filteredCards, setFilteredCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [cardsToDisplay, setCardsToDisplay] = useState(6);
  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  }); 
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
        errors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
    }

    if (!formData.phoneNumber.trim()) {
        errors.phoneNumber = 'Contact Number is required';
    }
    
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      const user = {
        ...formData,
    };
        try {
            await axios.post("http://localhost:8080/cardinfo", user);
            setFormData({
              name: '',
              email: '',
              phoneNumber: '',
            });
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

  // Sample real credit card data, you can replace this with your actual data
  const realCreditCards = creditCardData;

  useEffect(() => {
    if (selectedCardType === 'All') {
      setFilteredCards(realCreditCards);
    } else {
      const cardsOfType = realCreditCards.filter((card) => card.type === selectedCardType);
      setFilteredCards(cardsOfType);
    }
  }, [selectedCardType, realCreditCards]);

  useEffect(() => {
    setVisibleCards(filteredCards.slice(0, cardsToDisplay));
  }, [cardsToDisplay, filteredCards]);

  useEffect(() => {
    setCardsToDisplay(6);
  }, [selectedCardType]);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  const handleShowMore = () => {
    setCardsToDisplay(cardsToDisplay + 6);
  };

  const handleCancel = () => {
    setSelectedCard(null);
  };

  return (
    <section className="choose-card">
      {selectedCard ? (
        <h2>Apply for {selectedCard.name}</h2>
      ) : (
        <h2>Choose the best credit card that suits your needs</h2>
      )}

      {selectedCard ? null : (
        <div>
          <label htmlFor="cardTypeFilter">Card Type:</label>
          <select
            id="cardTypeFilter"
            onChange={(e) => setSelectedCardType(e.target.value)}
            value={selectedCardType}
          >
            <option value="All">All</option>
            <option value="Travel">Travel</option>
            <option value="Sports">Sports</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
      )}

      {selectedCard ? (
        <div className="center-container">
          <div className="application-form">
            <p>Type: {selectedCard.type}</p>
            <form onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="name">Full Name:</label>
            <input 
                type="text" 
                id="name" 
                placeholder="Enter your full name" 
                name="name" 
                value={formData.name} 
                onChange={(e)=> handleInputChange(e)}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            <label htmlFor="email">Email:</label>
            <input 
               type="email" 
               id="email" 
               placeholder="Enter your email address" 
               name="email" 
               value={formData.email} 
               onChange={(e)=> handleInputChange(e)} />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            <label htmlFor="phone">Phone Number:</label>
            <input 
               type="tel" 
               id="phone" 
               placeholder="Enter your phone number" 
               name="phoneNumber" 
               value={formData.phoneNumber} 
               onChange={(e)=> handleInputChange(e)}/>
            {errors.phoneNumber && <span className="invalid-feedback">{errors.phoneNumber}</span>}   
            <button className="apply-button">Submit Application</button>
            <button className="apply-button" onClick={handleCancel}>
              Cancel
            </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="card-container">
          {visibleCards.map((card, index) => (
            <div key={index} className="credit-card">
              <CreditCard
                name={card.name}
                type={card.type}
                number={card.number}
                balance={card.balance}
                cardHolder={card.cardHolder}
                expiry={card.expiry}
                cvv={card.cvv}
                bgColor={card.bgColor}
                onClick={() => handleSelectCard(card)}
              />
              <p>Type: {card.type}</p>
              <p>Joining Fee: {card.joiningFee}</p>
              <p>Annual Fee: {card.AnnualFee}</p>
              <button className="apply-button" onClick={() => handleSelectCard(card)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedCard ? null : (
        <div className="show-more-link">
          {cardsToDisplay < filteredCards.length && (
            <span onClick={handleShowMore}>Show More</span>
          )}
        </div>)
      }
      
    </section>
  );
}

export default ChooseCardSection;
