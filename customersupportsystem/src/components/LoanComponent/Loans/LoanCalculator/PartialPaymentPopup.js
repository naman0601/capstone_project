import React, { useState } from 'react';

function PartialPaymentPopup({ totalAmount, onPartialPayment }) {
  const [partialPaymentAmount, setPartialPaymentAmount] = useState('');

  const handlePartialPayment = () => {
    if (partialPaymentAmount > 0 && partialPaymentAmount <= totalAmount) {
      onPartialPayment(partialPaymentAmount);
    } else {
      // Handle validation errors or show a message to the user
    }
  };

  return (
    <div className="partial-payment-popup">
      <h2>Partial Payment</h2>
      <p>Total Amount: {totalAmount}</p>
      <input
        type="number"
        placeholder="Enter Partial Payment Amount"
        value={partialPaymentAmount}
        onChange={(e) => setPartialPaymentAmount(e.target.value)}
      />
      <button onClick={handlePartialPayment}>Submit Partial Payment</button>
    </div>
  );
}

export default PartialPaymentPopup;
