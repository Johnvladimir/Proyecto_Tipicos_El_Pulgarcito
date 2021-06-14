# Tipicos El Pulgarcito Tienda en línea

## Requirements

- MongoDB installed (Install it from [here](https://www.mongodb.com/try/download/community))
- NodeJS installed (Install it from [here](https://nodejs.dev/download/))

## Run Locally

### 1. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Init the MongoDB Services
- Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Create .env file in root folder
  - Set MONGODB_URL=mongodb+srv://your-db-connection

### 2. Run Backend

- Open new terminal and locate into Proyecto_Tipicos_El_Pulgarcito folder

```
$ npm install
$ npm run start
```

### 3. Run Frontend

- Open new terminal and localte into Proyectio_Tipicos_El_Pulgarcito folder

```
$ cd frontend
$ npm install
$ npm run start
```

### 4. Seed Users, Products and categories:

- Run this on chrome: http://localhost:5000/api/users/seed
- It returns admin email and password
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 9 sample products
- Run this on chrome: http://localhost:5000/api/categories/seed
- It creates 3 sample categories

### 5. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

### Users credentials after run step 4:

- User 1: name: Antonio, email: admin-antonio@example.com, password: 1234, admin
- User 2: name: John, email: admin-john@example.com password: 1234, admin
- User 3: name: Juan, email: admin-juan@example.com, password: 1234, no-admin
