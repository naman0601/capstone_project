import React, { useState , useEffect} from 'react';

function LoanCalculator() {
  const [purpose, setPurpose] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTermYears, setLoanTermYears] = useState('');
  const [loanTermMonths, setLoanTermMonths] = useState('');
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);

  useEffect(() => {
    // Calculate the total payable amount whenever one of the fields changes
    const calculateTotalPayableAmount = () => {
      if (purpose && loanAmount && (loanTermYears ||loanTermMonths)) {
        const interestRate = 9.04; // Change this to your desired interest rate
        const totalMonths = loanTermYears * 12 + Number(loanTermMonths);
        const totalAmount = (loanAmount * interestRate * totalMonths) / 100;
        setTotalPayableAmount(totalAmount+Number(loanAmount));
      } else {
        setTotalPayableAmount(0);
      }
    };
    calculateTotalPayableAmount();
  }, [purpose, loanAmount, loanTermYears, loanTermMonths]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Loan Calculator</h1>
          <h4>What are you borrowing for?</h4>
          <select
            className="form-select mb-3"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
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
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <h4>Time period of the loan</h4>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
            />
            <select
              className="form-select"
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(e.target.value)}
            >
              <option value="">Select Months</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
              <option value="36">36 Months</option>
              <option value="48">48 Months</option>
              <option value="60">60 Months</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            style={{ backgroundColor: '#652cb3', color: 'white' }}
          >
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
  );
}

export default LoanCalculator;
