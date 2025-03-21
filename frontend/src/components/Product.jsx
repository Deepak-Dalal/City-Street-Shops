import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card small-box list-card">
      <Link to={`/product/${product._id}`}>
        <img
          className="medium"
          src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}${
            product.image
          }`}
          alt={product.name}
        />
      </Link>
      <div className="card-body ">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="product-rating">
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
        </div>
        <div className="row">
          <div className="price">₹{product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
