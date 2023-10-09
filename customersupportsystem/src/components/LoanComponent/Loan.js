import React from 'react'
import Entry from './Loans/Entry/Entry'
import LoanTypes from './Loans/LoanTypes/LoanTypes'
import LoanCalculator from './Loans/LoanCalculator/LoanCalculator'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loan() {
  return (
    <div>
      
      <Entry/>
      <LoanTypes />
      <LoanCalculator/> 
    </div>
  )
}
