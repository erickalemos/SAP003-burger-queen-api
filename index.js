
const express = require('express');
const db = require('./app/models');
// const {products}= require('./app/models/products')
const app = express();
import productRoutes from './routes/productRoutes';

const PORT = process.env.PORT || 3000
// const { Client } = require('pg')
// const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/app/products', productRoutes)

app.post('/products', async (req, res) => {
  const createproducts =  await db.products.create(req.body)
  res.json(createproducts);
});


app.get('/products', async (req, res) => {
  const p = await db.products.findAll()
  res.json(p)
  console.log(res.json(p))
  // const client = new Client(db)
  // await client.connect()
  // const result = await client.query({
  //   text: 'select * from products;'
  // })
  // await client.end()
  // res.send(result.rows)
})
app.listen(PORT, console.log(`running on port ${PORT}`));
module.exports = app;

// db.sequelize.sync();


// const databaseConfig = {
//   user: 'postgres',
//   host: process.env.DATABASE_HOST || 'localhost',
//   database: 'store',
//   port: 5432,
//   ssl: false
// }




// const express = require('express')
// const server = express()