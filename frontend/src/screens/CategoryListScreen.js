import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, listCategories } from "../actions/categoryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { CATEGORY_DELETE_RESET } from "../constants/categoryConstants";

export default function CategoryListScreen(props) {
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: CATEGORY_DELETE_RESET });
    }
    dispatch(listCategories({}));
  }, [dispatch, props.history, successDelete, userInfo._id]);

  const deleteHandler = (category) => {
    if (window.confirm("Esta seguro que quiere eliminarlo?")) {
      dispatch(deleteCategory(category._id));
    }
  };

  return (
    <div className="margin-top">
      <div className="table-header row">
        <h1>Categorías</h1>
        <button
          type="button"
          className="create-button primary"
          onClick={() => props.history.push(`/category/create`)}
        >
          Crear Categoría
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>
                    <button
                      type="button"
                      className="edit-button small"
                      onClick={() =>
                        props.history.push(`/category/${category._id}/edit`)
                      }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="delete-button small"
                      onClick={() => deleteHandler(category)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
