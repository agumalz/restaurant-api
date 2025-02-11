const express = require('express');
const app = express();
const port = 3500;
const menuRoute = require('./src/routes/menuRoute');
const orderRoute = require('./src/routes/orderRoute');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Selamat Datang di Restoran Kami');
});

app.use('/', menuRoute);
app.use('/', orderRoute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});