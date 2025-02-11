const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my service on Windows!');
});

app.listen(port, () => {
  console.log(`Service is running on port ${port}`);
});
