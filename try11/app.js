const path = require('path');
const express = require('express');
const userRouter = require('./routes/userrouter');
const hostRouter = require('./routes/hostrouter');
const root=require('./utility/pathutil');
const app = express();


app.use(express.static(path.join(root,'public')));
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(root, "view", "404.html"));
});

const port = 3001;
app.listen(port, () => {
  console.log(`my server is running at http://localhost:${port}`);
});
