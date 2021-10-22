//WebService
const express = require('express');
const app = express();
//Conexão com banco
const connectDB = require("./src/settings/connect");
//Segurança com criptografia
const createJwtController = require('./src/controllers/jwt/create_jwt.js');
const jwtCheck = require('./src/middleware/jwt_check');
//Routes
const {
  createUserController,
  getUserController,
  getListUserController,
  setUpdateUserController
} = require("./src/controllers/users/index");

connectDB();

//EFETUA INTERCEPTAÇÃO DE REQUEST E TRATA JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/user/', createUserController);
app.get('/api/user/:id', getUserController);
app.get('/api/user/', getListUserController);
app.put('/api/user/:id', jwtCheck, setUpdateUserController);

app.post('/api/jwt', createJwtController);

app.listen(3000);