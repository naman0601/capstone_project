import React from "react";
import CredRatingandCard from "./CredScoreandCardDetails.js/CredRatingandCard";
import PreApprovedLoans from "./PreApprovedLoans/PreApprovedLoans";
import CreditCardInsights from "./CreditInsights/CreditCardInsights";
import DealsToOffer from "./Offers/DealsToOffer";

export default function Dashboard() {
  return (
    <div>
      <CredRatingandCard />
      <PreApprovedLoans />
      <CreditCardInsights />
      <DealsToOffer />
    </div>
  );
}
