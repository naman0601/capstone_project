import React, { useState, useEffect } from "react";

const PreApprovedLoans = () => {
  const [cards, setCards] = useState([]);
  const a = 800; // Assuming 'a' represents some kind of credit score or condition

  useEffect(() => {
    fetch('http://localhost:3000/preApprovedLoans') // Assuming db.json is in your public directory
      .then((response) => response.json())
      .then((data) => {
        // Determine which array to use based on the 'a' condition
        let selectedArray = [];
        if (a > 700) {
          selectedArray = data.Good;
        } else if (a >= 500 && a <= 700) {
          selectedArray = data.Average;
        }

        setCards(selectedArray);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [a]);

  return (
    <div style={{ backgroundColor: "#f0eff5" }}>
      <section className="container mycontainer mt-4 mb-4">
        <h1 className="text-center" style={{ marginBottom: "4rem" }}>
          Pre-Approved Loans For You
        </h1>
        <div className="row">
          {cards.length > 0 ? (
            cards.map((card) => (
              <div className="col-md-4" key={card.id}>
                <div className="card">
                <img
          src={card.imageUrl} // Assuming images are in a directory named "images"
          className="card-img-top"
          alt={card.title}
          style={{ width: "100%" }}
        />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">
                      <strong>Interest Rate:</strong> {card.interestRate}
                      <br />
                      <strong>Loan Amount:</strong> {card.loanAmount}
                      <br />
                      {card.description}
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#5e10b1" }}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}

        </div>
      </section>
    </div>
  );
};

export default PreApprovedLoans;
