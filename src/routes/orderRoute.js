const express = require('express');
const orderRouter = express.Router();
const { createOrder } = require('../controller/orderController');

orderRouter.post('/order', createOrder);

module.exports = orderRouter;