import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import Aside from "../components/Aside";

export default function HomeScreen({
  sidebarIsOpen,
  setSidebarIsOpen,
  loadingCategories,
  errorCategories,
  categories,
}) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products, "products");

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
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
        <h2 className="title product-list">Compra en línea</h2>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>Producto no encontrado</MessageBox>}
            <div className="row align product-list">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
