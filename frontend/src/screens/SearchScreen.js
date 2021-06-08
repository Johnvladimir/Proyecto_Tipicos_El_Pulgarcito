import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import Aside from "../components/Aside";
import Rating from "../components/Rating";
import { prices, ratings } from "../utils";

export default function SearchScreen(props) {
  const {
    name = "all",
    category = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const { sidebarIsOpen, setSidebarIsOpen } = props;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  return (
    <div className="flex-container">
      <Aside
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        loadingCategories={loading}
        errorCategories={error}
        categories={categories}
      />
      <div className="results-container">
        <div className="filter row">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="results-box">{products.length} Resultados</div>
          )}
          <div className="filter-button">
            Ordenar por{" "}
            <select
              value={order}
              onChange={(e) => {
                props.history.push(getFilterUrl({ order: e.target.value }));
              }}
            >
              <option value="newest">Las ultimas</option>
              <option value="lowest">Precio: Bajo a Alto</option>
              <option value="highest">Precio: Alto a Bajo</option>
              <option value="toprated">Popularidad</option>
            </select>
          </div>
        </div>
        <div className="">
          <div>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                {products.length === 0 && (
                  <MessageBox>No Product Found</MessageBox>
                )}
                <div className="row align searchscreen product-list">
                  {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                </div>
                <div className="row center pagination">
                  {[...Array(pages).keys()].map((x) => (
                    <Link
                      className={x + 1 === page ? "active" : ""}
                      key={x + 1}
                      to={getFilterUrl({ page: x + 1 })}
                    >
                      {x + 1}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
