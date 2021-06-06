import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
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
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import MapScreen from "./screens/MapScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import ChatBox from "./components/ChatBox";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="header-inner">
            <div className="btn-sidebar-search">
              <button
                type="button"
                className="open-sidebar"
                onClick={() => setSidebarIsOpen(true)}
              >
                <i className="fa fa-bars"></i>
              </button>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
            </div>

            <div>
              <Link to="#">Sobre nosotros</Link>
              <Link className="brand" to="/">
                Tipicos el pulgarcito
              </Link>
              <Link to="#">Preguntas frecuentes</Link>
            </div>

            <div className="icon-cart">
              <Link to="/cart">
                <FaShoppingCart size="2.2rem" />
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
                      <Link to="/profile">Perfil de usuario</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Historial de ordenes</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Cerrar sesión
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">
                  <FaUserAlt size="2.2rem" />
                </Link>
              )}
              {userInfo && userInfo.isSeller && (
                <div className="dropdown">
                  <Link to="#admin">
                    Vendedor <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/productlist/seller">Productos</Link>
                    </li>
                    <li>
                      <Link to="/orderlist/seller">Ordenes</Link>
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
                      <Link to="/productlist">Productos</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Ordenes</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Usuarios</Link>
                    </li>
                    <li>
                      <Link to="/support">Soporte</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <main>
          <aside className={sidebarIsOpen ? "open" : ""}>
            <ul className="categories">
              <li className="categories-aside-title">
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
                categories.map(({ name, subCategories }) => (
                  <>
                    <li key={name} className="category-title-container">
                      <Link
                        to={`/search/category/${name}`}
                        onClick={() => setSidebarIsOpen(false)}
                        className="category-title"
                      >
                        {name}
                      </Link>
                    </li>
                    <ul className="subcategories">
                      {subCategories.map((subCategory) => (
                        <li key={subCategory} className="subcategory">
                          <Link
                            to={`/search/category/${subCategory}`}
                            onClick={() => setSidebarIsOpen(false)}
                          >
                            {subCategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ))
              )}
            </ul>
          </aside>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>

          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute>

          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center">
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
          <div>Todos los derechos resevados</div>{" "}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
