import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SellerProductsSearchBox from "./components/SellerProductsSearchBox";
import GlobalProductsSearchBox from "./components/GlobalProductsSearchBox";
import SearchScreen from "./screens/SearchScreen";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import MapScreen from "./screens/MapScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import ChatBox from "./components/ChatBox";
import SellerProfileScreen from "./screens/SellerProfileScreen";
import shopIcon from "./assets/shop.png";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div id="brand-container" className="row">
            <div>
              <img src={shopIcon} style={{ width: "55px" }}></img>
            </div>
            <div>
              {/* <button
                type="button"
                className="open-sidebar"
                onClick={() => setSidebarIsOpen(true)}
              >
                <i className="fa fa-bars"></i>
              </button> */}
              <Link className="brand" to="/">
                City Street Shops
              </Link>
            </div>
          </div>
          <div className="global-product-search">
            <GlobalProductsSearchBox placeHolder="search items on website..." />
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        {/* <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside> */}
        <main>
          <Routes>
            <Route path="/seller/:id" element={<SellerScreen />}></Route>
            <Route
              path="/sellerProfile/:id"
              element={<SellerProfileScreen />}
            ></Route>
            <Route
              path="/seller/:id/name/:name"
              element={<SellerScreen />}
            ></Route>
            <Route
              path="/seller/:id/pageNumber/:pageNumber"
              element={<SellerScreen />}
            ></Route>
            <Route
              path="/seller/:id/name/:name/pageNumber/:pageNumber"
              element={<SellerScreen />}
            ></Route>
            <Route
              path="/seller/:id/name/:name/category/:category/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              element={<SellerScreen />}
            ></Route>
            <Route path="/cart/:id?" element={<CartScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route
              path="/product/:id/edit"
              element={<ProductEditScreen />}
            ></Route>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route
              path="/orderhistory/pageNumber/:pageNumber"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route path="/search/name/:name" element={<SearchScreen />}></Route>
            <Route
              path="/search/name/:name/category/:category/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              element={<SearchScreen />}
            ></Route>
            <Route
              path="/profile"
              element={<PrivateRoute element={ProfileScreen} />}
            />
            <Route
              path="/map"
              element={<PrivateRoute element={MapScreen} />}
            ></Route>
            <Route
              path="/productlist"
              element={<AdminRoute element={ProductListScreen} />}
            ></Route>
            <Route
              path="/productlist/pageNumber/:pageNumber"
              element={<AdminRoute element={ProductListScreen} />}
            ></Route>
            <Route
              path="/orderlist"
              element={<AdminRoute element={OrderListScreen} />}
            ></Route>
            <Route
              path="/orderlist/pageNumber/:pageNumber"
              element={<AdminRoute element={OrderListScreen} />}
            ></Route>
            <Route
              path="/userlist"
              element={<AdminRoute element={UserListScreen} />}
            ></Route>
            <Route
              path="/userlist/pageNumber/:pageNumber"
              element={<AdminRoute element={UserListScreen} />}
            ></Route>
            <Route
              path="/user/:id/edit"
              element={<AdminRoute element={UserEditScreen} />}
            ></Route>
            <Route
              path="/dashboard"
              element={<AdminRoute element={DashboardScreen} />}
            ></Route>
            <Route
              path="/support"
              element={<AdminRoute element={SupportScreen} />}
            ></Route>

            <Route
              path="/productlist/seller"
              element={<SellerRoute element={ProductListScreen} />}
            ></Route>
            <Route
              path="/productlist/seller/pageNumber/:pageNumber"
              element={<SellerRoute element={ProductListScreen} />}
            ></Route>
            <Route
              path="/orderlist/seller"
              element={<SellerRoute element={OrderListScreen} />}
            ></Route>
            <Route
              path="/orderlist/seller/pageNumber/:pageNumber"
              element={<SellerRoute element={OrderListScreen} />}
            ></Route>

            <Route path="/" element={<HomeScreen />}></Route>
            <Route
              path="/city/:city/pageNumber/:pageNumber"
              element={<HomeScreen />}
            ></Route>
          </Routes>
        </main>
        {/* <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>All right reserved</div>{' '}
        </footer> */}
        <footer className="row center">
          <div>&copy; citystreetshops.com</div>
          <span style={{ margin: "0 0 0 45px" }}>All Rights Reserved</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
