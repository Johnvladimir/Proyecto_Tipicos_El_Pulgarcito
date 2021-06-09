import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Antonio",
      email: "admin-antonio@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "admin-john@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Pupusa revuelta",
      category: "Pupusas",
      image: "/images/pupusa-revuelta.jpg",
      price: 1.0,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: "Rellena de chicharrón, frijol y queso",
    },
    {
      name: "Frijol con queso cremado",
      category: "Pupusas",
      image: "/images/pupusa-frijo-queso.jpg",
      price: 1.0,
      countInStock: 20,
      rating: 4.0,
      numReviews: 10,
      description: "Pupusa rellena de frijo conq ueso cremado",
    },
    {
      name: "Budin",
      category: "Tipicos",
      image: "/images/budin.jpg",
      price: 1.25,
      countInStock: 0,
      rating: 4.8,
      numReviews: 17,
      description:
        "Torta hecha a base de pan, leche fresca, especias y caramelo.",
    },
    {
      name: "Frijolitos",
      category: "Tipicos",
      image: "/images/frijolitos.jpg",
      price: 0.85,
      countInStock: 15,
      rating: 4.5,
      numReviews: 14,
      description:
        "Porción de: frijoles molidos fritos, frijoles guisados o casamiento.",
    },
    {
      name: "Tamal de elote",
      category: "Tipicos",
      image: "/images/tamal-elote.jpg",
      price: 1.25,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description: "Tamal de elote",
    },
    {
      name: "Queso cremado con jalapeño",
      category: "Pupusas",
      image: "/images/pupusa-queso-jalapeno.jpg",
      price: 1.1,
      countInStock: 12,
      rating: 4.5,
      numReviews: 15,
      description: "Pupusa de queso cremado con jalapeño casero",
    },
    {
      name: "1/2 galon de horchata",
      category: "Bebidas",
      image: "/images/horchata.jpg",
      price: 4.75,
      countInStock: 12,
      rating: 4.5,
      numReviews: 15,
      description: "1/2 galon de horchata",
    },
    {
      name: "Café (8oz)",
      category: "Bebidas",
      image: "/images/cafe.jpg",
      price: 0.9,
      countInStock: 12,
      rating: 4.5,
      numReviews: 15,
      description: "Delicioso café de la casa de 8oz",
    },
    {
      name: "Chocolate (8oz)",
      category: "Bebidas",
      image: "/images/chocolate.jpg",
      price: 1.0,
      countInStock: 12,
      rating: 4.5,
      numReviews: 15,
      description: "Delicioso chocolate de la casa de 8oz",
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
