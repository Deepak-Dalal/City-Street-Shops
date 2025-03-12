import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { detailsProduct } from "../actions/productActions";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

export default function CartScreen() {
  const navigate = useNavigate();
  const { id: productId } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const qty = Number(searchParams.get("qty")) || 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  const productDetails = useSelector((state) => state.productDetails);
  const {
    loading: loadingSeller,
    error: errorSeller,
    product,
  } = productDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      localStorage.setItem("cart_seller_product_id", productId);
      dispatch(addToCart(productId, qty));
      dispatch(detailsProduct(productId));
    } else {
      dispatch(detailsProduct(localStorage.getItem("cart_seller_product_id")));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=shipping");
  };
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}${
                        item.image
                      }`}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>₹{item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        {cartItems.length > 0 && (
          <div className="card card-body">
            {loadingSeller ? (
              <LoadingBox></LoadingBox>
            ) : errorSeller ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                <ul>
                  <li>
                    <b>Seller : </b>{" "}
                    <Link to={`/seller/${product.seller._id}`}>
                      <strong>{product.seller.seller.name}</strong>
                    </Link>
                  </li>
                  <li>
                    <h2>
                      Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                      items) : ₹
                      {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </h2>
                  </li>
                  {product.seller.seller.minOrderPrice >
                  cartItems.reduce((a, c) => a + c.price * c.qty, 0) ? (
                    <MessageBox variant="danger">
                      {`This Seller requires minimum cart value of ₹${product.seller.seller.minOrderPrice} for delivery`}
                    </MessageBox>
                  ) : (
                    <li>
                      <button
                        type="button"
                        onClick={checkoutHandler}
                        className="primary block"
                        disabled={cartItems.length === 0}
                      >
                        Proceed to Checkout
                      </button>
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
