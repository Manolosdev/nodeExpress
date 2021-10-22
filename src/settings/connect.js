//Conexão do banco -----------------------------------------------------
const mongoose = require('mongoose');
const fs = require("fs");
const password = fs.readFileSync("./.pass", "utf-8");

const URI = `mongodb+srv://dev:${password.trim()}@cluster0.avxpk.mongodb.net/nodeexpress?retryWrites=true&w=majority`;
const connect = () =>
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(console.error);
module.exports = connect;