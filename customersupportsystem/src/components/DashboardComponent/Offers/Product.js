import "./Product.css";

const Product = () => {
  return (
    <div className="card">
      <img
        className="product--image"
        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h2>Sport sneaker</h2>
      <p className="price">$20.99</p>
      <p>description</p>
      <p>
        <button>Avail Now</button>
      </p>
    </div>
  );
};
export default Product;
