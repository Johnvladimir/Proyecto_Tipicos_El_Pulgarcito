import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { createCategory } from "../actions/categoryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { CATEGORY_UPDATE_RESET } from "../constants/categoryConstants";

export default function CategoryEditScreen(props) {
  const [name, setName] = useState("");

  const categoryCreate = useSelector((state) => state.categoryCreate);
  console.log(categoryCreate, "CATEGORYCREATE");
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    category: createdCategory,
  } = categoryCreate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      props.history.push("/categorylist");
    }
  }, [successCreate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update category
    dispatch(createCategory(name));
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Crear Categoria</h1>
        </div>
        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        <>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Ingresar nombre"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label></label>
            <button className="primary" type="submit">
              Crear Categoria
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
