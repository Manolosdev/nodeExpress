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
  getAllUserController,
  setUpdateUserController,
  setRemoveUserController
} = require("./src/controllers/users/index");
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//EndPoints
app.post('/api/user/', createUserController);
app.get('/api/user/:id', getUserController);
app.get('/api/user/', getAllUserController);
app.put('/api/user/:id', jwtCheck, setUpdateUserController);
app.delete('/api/user/:id', setRemoveUserController);

app.post('/api/jwt', createJwtController);

app.listen(3000);