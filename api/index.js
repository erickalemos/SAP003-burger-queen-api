import productRoutes from './server/routes/productRoutes';
import ordersRoutes from './server/routes/ordersRoutes';
//import orderItemsRoutes from './server/routes/orderItemsRoutes';

const express = require('express');
const db = require('./server/src/models');

const app = express();


const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);
//app.use('/api/orderItems', orderItemsRoutes);

app.listen(PORT, console.log(`running on port ${PORT}`));

module.exports = app;

