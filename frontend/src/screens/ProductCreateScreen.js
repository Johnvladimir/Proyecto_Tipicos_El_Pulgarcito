import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { createProduct } from "../actions/productActions";
import { listCategories } from "../actions/categoryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

export default function ProductEditScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const categoryList = useSelector((state) => state.categoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = categoryList;
  console.log(categoryList, "categories in productcreate");

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push("/productlist");
    }
    console.log(categories, "QUE A PASAOOO");
    if (!categories || categories.length === 0) {
      dispatch(listCategories({}));
    } else {
      setCategory(categories[0].name);
    }
  }, [dispatch, categories, successCreate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      createProduct({
        name,
        price,
        image,
        category,
        countInStock,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Crear Producto</h1>
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
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Precio</label>
            <input
              id="price"
              type="text"
              placeholder="Ingresar precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          {/* <div>
            <label htmlFor="image">Image</label>
            <input
              id="image"
              type="text"
              placeholder="Enter image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div> */}
          <div>
            <label htmlFor="imageFile">Archivo de imagen</label>
            <input
              type="file"
              id="imageFile"
              label="Seleccionar archivo"
              onChange={uploadFileHandler}
            ></input>
            {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}
          </div>
          <div>
            <label htmlFor="category">Categoría</label>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox>{errorCategories}</MessageBox>
            ) : (
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map(({ name }) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label htmlFor="countInStock">Cantidad en inventario</label>
            <input
              id="countInStock"
              type="text"
              placeholder="Ingresar cantidad en inventario"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              rows="3"
              type="text"
              placeholder="Ingresar descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label></label>
            <button className="primary" type="submit">
              Crear Producto
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
