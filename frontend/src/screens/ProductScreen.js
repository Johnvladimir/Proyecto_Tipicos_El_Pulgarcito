import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createReview, detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
import { IoIosArrowBack } from "react-icons/io";
import Aside from "../components/Aside";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const {
    sidebarIsOpen,
    setSidebarIsOpen,
    loadingCategories,
    errorCategories,
    categories,
  } = props;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Revisión enviada con éxito");
      setRating("");
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert("Por favor ingrese calificación");
    }
  };
  return (
    <div className="flex-container">
      <Aside
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        loadingCategories={loadingCategories}
        errorCategories={errorCategories}
        categories={categories}
      />
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className="row top">
              <div className="col-2">
                <img
                  className="large"
                  src={product.image}
                  alt={product.name}
                ></img>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <Link to="/" className="linkBackHome">
                      <IoIosArrowBack size="1.5rem" /> Regresar al inicio
                    </Link>
                  </li>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </li>
                  <li>
                    <b>Precio :</b> ${product.price}
                  </li>
                  <li>
                    <b>Descripción:</b>
                    <p>{product.description}</p>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div>
                          <b>Precio: </b>
                        </div>
                        <div className="price">${product.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>
                          <b>Estado: </b>
                        </div>
                        <div>
                          {product.countInStock > 0 ? (
                            <span className="success">En Stock</span>
                          ) : (
                            <span className="danger">No disponible</span>
                          )}
                        </div>
                      </div>
                    </li>
                    {product.countInStock > 0 && (
                      <>
                        <li>
                          <div className="row">
                            <div>
                              <b>Cantidad</b>
                            </div>
                            <div>
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            onClick={addToCartHandler}
                            className="primary block"
                          >
                            Añadir al carrito
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 id="reviews">Reseñas</h2>
              {product.reviews.length === 0 && (
                <MessageBox>No hay reseña</MessageBox>
              )}
              <ul>
                {product.reviews.map((review) => (
                  <li key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating rating={review.rating} caption=" "></Rating>
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </li>
                ))}
                <li>
                  {userInfo ? (
                    <form className="form" onSubmit={submitHandler}>
                      <div>
                        <h2>Escribe una reseña</h2>
                      </div>
                      <div>
                        <label htmlFor="rating">Clasificación</label>
                        <select
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Seleccione...</option>
                          <option value="1">1- Pobre</option>
                          <option value="2">2- Justo</option>
                          <option value="3">3- Bueno</option>
                          <option value="4">4- Muy bueno</option>
                          <option value="5">5- Excelente</option>
                        </select>
                      </div>
                      {/* <div>
                        <label htmlFor="comment">Comentario</label>
                        <textarea
                          id="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div> */}
                      <div>
                        <label />
                        <button className="primary" type="submit">
                          Enviar
                        </button>
                      </div>
                      <div>
                        {loadingReviewCreate && <LoadingBox></LoadingBox>}
                        {errorReviewCreate && (
                          <MessageBox variant="danger">
                            {errorReviewCreate}
                          </MessageBox>
                        )}
                      </div>
                    </form>
                  ) : (
                    <MessageBox>
                      Por favor <Link to="/signin">Inicia sesión</Link> para
                      escribir una reseña
                    </MessageBox>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
