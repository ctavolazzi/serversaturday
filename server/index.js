const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(600).send('Welcome to Server Saturday!');
});

app.listen(port, () => {
  console.log(`Server is listening at port http://localhost:${port}`);
});