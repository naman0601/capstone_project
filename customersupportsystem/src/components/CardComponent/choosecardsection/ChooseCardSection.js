import React, { useState, useEffect } from 'react';
import './ChooseCardSection.css';
import CreditCard from '../creditCard/CreditCard';

function ChooseCardSection() {
  const [selectedCardType, setSelectedCardType] = useState('All');
  const [filteredCards, setFilteredCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [cardsToDisplay, setCardsToDisplay] = useState(6);
  const [selectedCard, setSelectedCard] = useState(null);

  // Sample real credit card data, you can replace this with your actual data
  const realCreditCards = [
    {
      name: 'BTC',
      type: 'Crypto',
      number: 'XXXX XXXX XXXX 6182',
      balance: '$827,199',
      cardHolder: 'JOHN DOE',
      expiry: '08/23',
      cvv: '123',
      bgColor: '#5d70ff', // Background color for Crypto cards
    },
    {
      name: 'Card 2',
      type: 'Sports',
      number: 'XXXX XXXX XXXX 1234',
      balance: '$12,345',
      cardHolder: 'JANE SMITH',
      expiry: '07/24',
      cvv: '456',
      bgColor: '#ff5d70', // Background color for Sports cards
    },
    {
      name: 'TravelMaster',
      type: 'Travel',
      number: 'XXXX XXXX XXXX 5678',
      balance: '$20,000',
      cardHolder: 'MICHAEL BROWN',
      expiry: '11/25',
      cvv: '789',
      bgColor: '#70ff5d', // Background color for Travel cards
    },
    {
      name: 'Lifestyle Gold',
      type: 'Lifestyle',
      number: 'XXXX XXXX XXXX 8765',
      balance: '$5,432',
      cardHolder: 'EMMA WILSON',
      expiry: '02/26',
      cvv: '234',
      bgColor: '#ff705d', // Background color for Lifestyle cards
    },
    {
      name: 'Entertainment Plus',
      type: 'Entertainment',
      number: 'XXXX XXXX XXXX 4321',
      balance: '$15,678',
      cardHolder: 'DAVID LEE',
      expiry: '05/27',
      cvv: '567',
      bgColor: '#5dff70', // Background color for Entertainment cards
    },
    {
      name: 'ShopEasy',
      type: 'Shopping',
      number: 'XXXX XXXX XXXX 9876',
      balance: '$3,210',
      cardHolder: 'SARAH ADAMS',
      expiry: '10/28',
      cvv: '890',
      bgColor: '#705dff', // Background color for Shopping cards
    },
    {
      name: 'MakeMyTrip',
      type: 'Travel',
      number: 'XXXX XXXX XXXX 6182',
      balance: '$63478',
      cardHolder: 'ABHAY SINGH',
      expiry: '08/23',
      cvv: '123',
      bgColor: '#FF0000', // Background color for Crypto cards
    },
  ];

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
            <option value="Crypto">Crypto</option>
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
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" placeholder="Enter your full name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email address" />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" />
            <button className="apply-button">Submit Application</button>
            <button className="apply-button" onClick={handleCancel}>
              Cancel
            </button>
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
