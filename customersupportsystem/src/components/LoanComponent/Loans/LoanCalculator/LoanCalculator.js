import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./LoanCalculator.css";

function LoanCalculator() {
  const location = useLocation();
  console.log(location);
  const [purpose, setPurpose] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
<<<<<<< HEAD
=======
  const [interest, setInterest] = useState(9);
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [showApplyNow, setShowApplyNow] = useState(true);
  const [showManageLoans, setShowManageLoans] = useState(false);
  const [userLoans, setUserLoans] = useState([]);
  const userId = 204;
<<<<<<< HEAD
=======
  let interestRate = interest; // Change this to your desired interest rate
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
  const calculateTotalPayableAmount = () => {
    if (purpose && loanAmount && (loanTermYears || loanTermMonths)) {
      const totalMonths = loanTermYears * 12 + Number(loanTermMonths);
      const totalAmount = (loanAmount * interestRate * totalMonths) / 1200;
      setTotalPayableAmount(totalAmount + Number(loanAmount));
    } else {
      setTotalPayableAmount(0);
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    
=======
    if (location.state && location.state.card) {
      const card = location.state.card;
      setPurpose(card.title);
      setLoanAmount(card.loanAmount);
      setInterest(card.interestRate);
    }
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
    calculateTotalPayableAmount();
  }, [
    purpose,
    loanAmount,
    loanTermYears,
    loanTermMonths,
    calculateTotalPayableAmount,
<<<<<<< HEAD
=======
    location.state,
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the data you want to send to the server
    const loanData = {
      loanType: purpose,
      loanAmt: loanAmount,
      loanInterest: 9.04, // Hardcoded interest rate
      loanTime: loanTermYears * 12 + Number(loanTermMonths), // Total months
      userId: userId,
    };

    // Send a POST request to the server with the loanData
    try {
      const response = await axios.post("http://localhost:8080/loan", loanData);
      console.log("Loan data sent successfully:", response.data);

      // Fetch user loans after submitting the new loan
      const userLoanResponse = await axios.get(
        "http://localhost:8080/userLoans?userId=204"
      );
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
<<<<<<< HEAD
                  <option value="Home">Home</option>
                  <option value="Car">Car</option>
=======
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Vehicle Loan">Car</option>
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
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
<<<<<<< HEAD
                    <option value="1">12 Months</option>
                    <option value="2">24 Months</option>
                    <option value="3">36 Months</option>
                    <option value="4">48 Months</option>
                    <option value="5">60 Months</option>
                    <option value="6">60 Months</option>
                    <option value="7">60 Months</option>
                    <option value="8">60 Months</option>
                    <option value="9">60 Months</option>
                    <option value="10">60 Months</option>
                    <option value="11">60 Months</option>
=======
                    <option value="1">1 Months</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="4">4 Months</option>
                    <option value="5">5 Months</option>
                    <option value="6">6 Months</option>
                    <option value="7">7 Months</option>
                    <option value="8">8 Months</option>
                    <option value="9">9 Months</option>
                    <option value="10">10 Months</option>
                    <option value="11">11 Months</option>
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
                  </select>
                </div>
                <button
                  type="submit"
                  style={{ background: "#652cb3" }}
                  className="btn btn-primary text-white"
                >
                  Submit
                </button>
              </div>
              <div className="col-md-6">
                <div
                  className="card"
                  style={{ backgroundColor: "#652cb3", color: "white" }}
                >
                  <div className="card-body">
                    <h1>Loan Calculator</h1>
                    <h4>What are you borrowing for?</h4>
                    <p>{purpose}</p>
                    <h4>Amount you wish to borrow</h4>
                    <p>{loanAmount}</p>
                    <h4>Time period of the loan</h4>
                    <p>
                      {loanTermYears} years {loanTermMonths} months
                    </p>
                    <h4>Interest Rate</h4>
<<<<<<< HEAD
                    <p>9.04%</p>
=======
                    <p>{interest}</p>
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
                    <h4>Total Payable Amount</h4>
                    <p>{totalPayableAmount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      <div>
        {showManageLoans && (
          <div>
            <div>
              <h1 className="manage">Manage Your Loans</h1>
            </div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Loan Type</th>
                  <th scope="col">Loan Amount</th>
                  <th scope="col">Loan Interest Rate</th>
                  <th scope="col">Loan Period</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>
                {userLoans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.id}</td>
                    <td>{loan.loanType}</td>
                    <td>{loan.loanAmt}</td>
                    <td>{loan.loanInterest}</td>
                    <td>{loan.loanTime}</td>
                    <td>
                      <button className="btn btn-primary but">
                        Partial Payment
                      </button>
                    </td>
                    {/* Add additional columns for other loan details as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanCalculator;