import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { detailsCategory, updateCategory } from "../actions/categoryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { CATEGORY_UPDATE_RESET } from "../constants/categoryConstants";

export default function CategoryEditScreen(props) {
  const categoryId = props.match.params.id;
  const [name, setName] = useState("");

  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error, category } = categoryDetails;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/categorylist");
    }
    if (!category || category._id !== categoryId || successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET });
      dispatch(detailsCategory(categoryId));
    } else {
      setName(category.name);
    }
  }, [category, dispatch, categoryId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update category
    dispatch(
      updateCategory({
        _id: categoryId,
        name,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Editar Categoria - id:{categoryId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Actualizar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
