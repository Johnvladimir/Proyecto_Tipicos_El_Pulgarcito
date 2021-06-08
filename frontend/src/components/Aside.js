import React from "react";
import { Link, Route } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import SearchBox from "./SearchBox";

export default function Aside({
  sidebarIsOpen,
  setSidebarIsOpen,
  loadingCategories,
  errorCategories,
  categories,
}) {
  return (
    <aside className={sidebarIsOpen ? "open" : ""}>
      <div className="close-sidebar-container">
        <button
          onClick={() => setSidebarIsOpen(false)}
          className="close-sidebar"
          type="button"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>
      <div className="search-container">
        <Route
          render={({ history }) => <SearchBox history={history}></SearchBox>}
        ></Route>
      </div>
      <ul className="aside-items">
        <li className="item aboutus">
          <Link to="#">Sobre nosotros</Link>
        </li>
        <li className="item faq">
          <Link to="#">Preguntas frecuentes</Link>
        </li>

        <li className="item categories-aside-title">
          <strong>Categorías</strong>
        </li>
      </ul>
      <ul className="categories-items-container">
        {loadingCategories ? (
          <LoadingBox></LoadingBox>
        ) : errorCategories ? (
          <MessageBox variant="danger">{errorCategories}</MessageBox>
        ) : (
          categories.map(({ name }) => (
            <li key={name} className="category-item">
              <Link
                to={`/search/category/${name}`}
                onClick={() => setSidebarIsOpen(false)}
                className="category-title"
              >
                {name}
              </Link>
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}
