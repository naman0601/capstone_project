import React from 'react'
import HeroUnit from './Home/HeroUnit'
import LoanTypes from './Loans/LoanTypes/LoanTypes'
import LoanCalculator from './Loans/LoanCalculator/LoanCalculator'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Loan() {
  return (
    <div>
      <HeroUnit/>
      <LoanTypes />
      <LoanCalculator/> 
    </div>
  )
}
