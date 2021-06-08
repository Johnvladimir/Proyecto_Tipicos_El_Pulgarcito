import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Category from "../models/categoryModel";
import User from "../models/userModel.js";
import { isAdmin, isAuth } from "../utils.js";

const categoryRouter = express.Router();

categoryRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
    const count = await Category.count({ ...nameFilter });
    const categories = await Category.find({
      ...nameFilter,
    });
    //console.log(categories, "categories");
    // .limit(pageSize);
    res.send({ categories });
  })
);

categoryRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    //await Category.remove({});
    const createdCategories = await Category.insertMany(data.categories);
    res.send({ createdCategories });
  })
);

categoryRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.send(category);
    } else {
      res.status(404).send({ message: "Category Not Found" });
    }
  })
);

categoryRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const category = new Category({
      name: req.body.name,
    });
    console.log(category);
    const createdCategory = await category.save();
    res.send({ message: "Category Created", category: createdCategory });
  })
);

categoryRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (category) {
      category.name = req.body.name;
      const updatedCategory = await category.save();
      res.send({ message: "Category Updated", category: updatedCategory });
    } else {
      res.status(404).send({ message: "Category Not Found" });
    }
  })
);

categoryRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      const deleteCategory = await category.remove();
      res.send({ message: "Category Deleted", category: deleteCategory });
    } else {
      res.status(404).send({ message: "Category Not Found" });
    }
  })
);

export default categoryRouter;
