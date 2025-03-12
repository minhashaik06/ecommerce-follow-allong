const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();
const dotenv = require('dotenv')
dotenv.config

app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Fixed CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads')); // Serves uploaded images
app.use('/upload', express.static(path.join(__dirname, '../upload')));
//app.use('/products', express.static(path.join(__dirname, '../products')));
app.use('/products', express.static(path.join(__dirname, '../products')));

const userRouter = require("./controller/user");
const productRouter = require('./controller/Product');

app.use('/api', userRouter);
app.use('/api/products', productRouter);

module.exports = app;
