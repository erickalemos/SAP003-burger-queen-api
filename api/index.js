import productRoutes from './server/routes/productRoutes';

const express = require('express');
const db = require('./server/src/models');

const app = express();


const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('api/products', productRoutes)

app.post('/products', async (req, res) => {
  const createproducts =  await db.products.create(req.body)
  res.json(createproducts);
});

app.get('/products', async (req, res) => {
  const p = await db.products.findAll()
  res.json(p)
  console.log(res.json(p))

})
app.listen(PORT, console.log(`running on port ${PORT}`));
module.exports = app;

