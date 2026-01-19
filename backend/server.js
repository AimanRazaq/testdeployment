const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(5000, () => {
  console.log('Test backend running on port 5000');
});