const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    const index = path.join(__dirname, 'client/build', 'index.html');
    res.sendFile(index);
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
