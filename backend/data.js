import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Pupusas",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "NA",
      rating: 4.5,
      numReviews: 10,
      description: "Pequeña descripción",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Tipicos",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "NA",
      rating: 4.0,
      numReviews: 10,
      description: "Pequeña descripción",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Bebidas",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "NA",
      rating: 4.8,
      numReviews: 17,
      description: "Pequeña descripción",
    },
    {
      name: "Nike Slim Pant",
      category: "Pupusas",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 15,
      brand: "NA",
      rating: 4.5,
      numReviews: 14,
      description: "Pequeña descripción",
    },
    {
      name: "Puma Slim Pant",
      category: "Pupusas",
      image: "/images/p5.jpg",
      price: 65,
      countInStock: 5,
      brand: "NA",
      rating: 4.5,
      numReviews: 10,
      description: "Pequeña descripción",
    },
    {
      name: "Adidas Fit Pant",
      category: "Tipicos",
      image: "/images/p6.jpg",
      price: 139,
      countInStock: 12,
      brand: "NA",
      rating: 4.5,
      numReviews: 15,
      description: "Pequeña descripción",
    },
  ],
  categories: [
    {
      name: "Pupusas",
    },
    {
      name: "Tipicos",
    },
    {
      name: "Bebidas",
    },
  ],
};
export default data;
