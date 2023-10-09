<<<<<<< HEAD
import React from 'react'
import Entry from './Loans/Entry/Entry'
import LoanTypes from './Loans/LoanTypes/LoanTypes'
import LoanCalculator from './Loans/LoanCalculator/LoanCalculator'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Loan() {
  return (
    <div>
      
      <Entry/>
=======
import React from "react";
import Entry from "./Loans/Entry/Entry";
import LoanTypes from "./Loans/LoanTypes/LoanTypes";
import LoanCalculator from "./Loans/LoanCalculator/LoanCalculator";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../layout/NavbarComponent/Navbar";
export default function Loan() {
  return (
    <div>
      <Entry />
>>>>>>> 4df17334d21825323ad69eff52f686059b796fc8
      <LoanTypes />
      <LoanCalculator />
    </div>
  );
}
