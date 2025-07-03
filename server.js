const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // serve static files

app.get('/', (req, res) => {
  res.send('Mailora is running 🎉');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
