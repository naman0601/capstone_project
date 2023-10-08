import React from "react";
import Slider from "react-slick";
import "./FeaturesSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturesSection() {
  const features = [
    {
      title: "Credit Score-Dependent Credit Limit Increases",
      icon: "/icons/data-analytics.png",
      content:
        "Your responsible financial behavior is rewarded with automatic credit limit increases. Watch your purchasing power grow along with your credit score.",
    },
    {
      title: "Exclusive Access to Premium Services",
      icon: "/icons/exclusive.png",
      content:
        "Indulge in premium concierge services, travel benefits, and airport lounge access, designed exclusively for our high credit score customers.",
    },
    {
      title: "Flexible Payment Terms for Lower Credit Scores",
      icon: "/icons/flexibility.png",
      content:
        "We understand the journey to great credit is not always easy. Choose flexible payment terms that fit your budget, making credit management more manageable.",
    },
    {
      title: "Personalized Credit Limits",
      icon: "/icons/offer.png",
      content:
        "We tailor your credit limit to your needs, ensuring you have just the right amount of credit to match your lifestyle.",
    },
    {
      title: "Rewards Boost for Good Credit Behavior",
      icon: "/icons/reward.png",
      content:
        "As your credit score improves, so do your rewards. It is like getting a bonus for being financially responsible.",
    },
    {
      title: "Zero Annual Fee for High Credit Scores",
      icon: "/icons/rewards.png",
      content:
        "Enjoy the rewards of your excellent credit rating with an annual fee waiver. It is our way of saying thank you.",
    },
  ];

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "purple",
          color: "black",
          margin: "5px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "purple",
          color: "black",
          margin: "5px",
        }}
        onClick={onClick}
      />
    );
  };

  // Configure the slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="features">
      <h2>Explore credit card features and benefits</h2>

      <div>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="card CardFeatures">
              <div className="card-content">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="feature-icon"
                />
                <h3>{feature.title}</h3>
              </div>
              <div className="second-content">
                <h4>{feature.content}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection;
