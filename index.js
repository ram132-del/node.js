// index.js or server.js
const express = require('express');
const app = express();

// simple route
app.get('/', (req, res) => {
  res.send('techland@it solutions + Node.js!');
});

// use dynamic port for hosting
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
