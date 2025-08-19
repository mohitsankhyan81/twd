const express = require('express');
const path = require('path');

const app = express();
const root = require('./utility/pathutil');

const homeRouter = require('./router/homeRouter');
const contactRouter = require('./router/contactRoute');

app.use(express.urlencoded({ extended: true }));
app.use(homeRouter);
app.use(contactRouter);

// 404 handling
app.use((req, res, next) => {
  res.sendFile(path.join(root, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
