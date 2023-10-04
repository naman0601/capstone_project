import personalLoan from "../../../images/personal Loan.jpg";

const PreApprovedLoans = () => {
  return (
    <div style={{ backgroundColor: "#f0eff5" }}>
      <section className="container mt-4 mb-4">
        <h1 className="text-center" style={{ marginBottom: "4rem" }}>
          Pre-Approved Loans For you
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src={personalLoan} // Replace with your image URL
                className="card-img-top"
                alt="Personal Loan"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Personal Loan</h5>
                <p className="card-text">
                  <strong>Interest Rate:</strong> 8%
                  <br />
                  <strong>Loan Amount:</strong> $10,000
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a libero non justo egestas dictum ac ac justo. Praesent
                  vitae euismod dui.
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
          <div className="col-md-4">
            <div className="card">
              <img
                src={personalLoan} // Replace with your image URL
                className="card-img-top"
                alt="Home Loan"
              />
              <div className="card-body">
                <h5 className="card-title">Home Loan</h5>
                <p className="card-text">
                  <strong>Interest Rate:</strong> 6%
                  <br />
                  <strong>Loan Amount:</strong> $250,000
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a libero non justo egestas dictum ac ac justo. Praesent
                  vitae euismod dui.
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
          <div className="col-md-4">
            <div className="card">
              <img
                src={personalLoan} // Replace with your image URL
                className="card-img-top"
                alt="Vehicle Loan"
              />
              <div className="card-body">
                <h5 className="card-title">Vehicle Loan</h5>
                <p className="card-text">
                  <strong>Interest Rate:</strong> 7.5%
                  <br />
                  <strong>Loan Amount:</strong> $20,000
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a libero non justo egestas dictum ac ac justo. Praesent
                  vitae euismod dui.
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
        </div>
      </section>
    </div>
  );
};
export default PreApprovedLoans;
