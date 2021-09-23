const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/router');
const port = 3000;
app.use(cors());
app.use(express.json());

app.use(router);


app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`);
});