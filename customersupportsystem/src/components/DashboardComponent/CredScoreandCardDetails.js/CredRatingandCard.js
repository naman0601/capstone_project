import CreditScoreProgressBar from "./ProgressBar/ProgressBar";
import CreditCard from "../CreditCard/CreditCard";

const CredRatingandCard = () => {
  return (
    <section
      class="container-fluid"
      style={{
        marginBottom: "4.5rem",
        backgroundColor: "white",
        color: "#5a287d",
        marginTop: "4rem",
      }}
    >
      <div class="row justify-content-between">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
          {/* <CredScore /> */}
          <CreditScoreProgressBar creditScore={780} />
        </div>

        {/* <!-- Second Column --> */}
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-4 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4px",
          }}
        >
          <CreditCard />
        </div>

        {/* <!-- Third Column --> */}
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-4 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="total-credit">
            <h1>Total Credit Allowed:</h1>
            <h2>1,49,000</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredRatingandCard;
