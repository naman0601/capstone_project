import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LoanCalculator() {
  const [purpose, setPurpose] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTermYears, setLoanTermYears] = useState('');
  const [loanTermMonths, setLoanTermMonths] = useState('');
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [showApplyNow, setShowApplyNow] = useState(true);
  const [showManageLoans, setShowManageLoans] = useState(false);
  const [userLoans, setUserLoans] = useState([]);
  const userId=203
  const calculateTotalPayableAmount = () => {
    if (purpose && loanAmount && (loanTermYears || loanTermMonths)) {
      const interestRate = 9.04; // Change this to your desired interest rate
      const totalMonths = loanTermYears * 12 + Number(loanTermMonths);
      const totalAmount = (loanAmount * interestRate * totalMonths) / 100;
      setTotalPayableAmount(totalAmount + Number(loanAmount));
    } else {
      setTotalPayableAmount(0);
    }
  };

  useEffect(() => {
    calculateTotalPayableAmount();
  }, [purpose, loanAmount, loanTermYears, loanTermMonths, calculateTotalPayableAmount]);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the data you want to send to the server
    const loanData = {
      loanType: purpose,
      loanAmt: loanAmount,
      loanInterest: 9.04, // Hardcoded interest rate
      loanTime: loanTermYears * 12 + Number(loanTermMonths), // Total months
      userId:userId
    };

    // Send a POST request to the server with the loanData
    try {
      const response = await axios.post("http://localhost:8080/loan", loanData);
      console.log("Loan data sent successfully:", response.data);
      
      // Fetch user loans after submitting the new loan
      const userLoanResponse = await axios.get('http://localhost:8080/userLoans?userId=203');
      setUserLoans(userLoanResponse.data);

      // Hide the "Apply Now" card and show the "Manage Your Loans" card
      setShowApplyNow(false);
      setShowManageLoans(true);
     
    } catch (error) {
      console.error("Error sending loan data:", error);
      // Handle errors here
    }
  };

  return (
    <div className="container mt-5">
      {showApplyNow && (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Loan Calculator</h1>
            <h4>What are you borrowing for?</h4>
            <select
              className="form-select mb-3"
              value={purpose}
              onChange={(e) => {
                setPurpose(e.target.value);
                calculateTotalPayableAmount();
              }}
            >
              <option value="">Select Purpose</option>
              <option value="Pre-Approved Loan">Pre-Approved Loan</option>
              <option value="Home">Home</option>
              <option value="Car">Car</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
            <h4>Amount you wish to borrow</h4>
            <input
              type="number"
              className="form-control mb-3"
              value={loanAmount}
              onChange={(e) => {
                setLoanAmount(e.target.value);
                calculateTotalPayableAmount();
              }}
            />
            <h4>Time period of the loan</h4>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                value={loanTermYears}
                onChange={(e) => {
                  setLoanTermYears(e.target.value);
                  calculateTotalPayableAmount();
                }}
              />
              <select
                className="form-select"
                value={loanTermMonths}
                onChange={(e) => {
                  setLoanTermMonths(e.target.value);
                  calculateTotalPayableAmount();
                }}
              >
                <option value="">Select Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
                <option value="48">48 Months</option>
                <option value="60">60 Months</option>
              </select>
            </div>
            <button type='submit' className='btn btn-outline-primary text-white'>Submit</button>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: '#652cb3', color: 'white' }}>
              <div className="card-body">
                <h1>Loan Calculator</h1>
                <h4>What are you borrowing for?</h4>
                <p>{purpose}</p>
                <h4>Amount you wish to borrow</h4>
                <p>{loanAmount}</p>
                <h4>Time period of the loan</h4>
                <p>{loanTermYears} years {loanTermMonths} months</p>
                <h4>Interest Rate</h4>
                <p>9.04%</p>
                <h4>Total Payable Amount</h4>
                <p>{totalPayableAmount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    )}
    {showManageLoans && (
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ backgroundColor: '#652cb3', color: 'white' }}>
              <div className="card-body">
                <h1>Manage Your Loans</h1>
                {/* Display user loans here */}
                {userLoans.map((loan) => (
                  <div key={loan.id}>
                    <h4>Loan Type</h4>
                    <p>{loan.loanType}</p>
                    <p>{loan.loanAmt}</p>
                    <p>{loan.loanInterest}</p>
                    <p>{loan.loanTime}</p>
                    {/* Display other loan details as needed */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
