const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3007;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Super hiper mega sistema de inventarios 3000');
});

app.listen(port, () => {
  console.log('Te escucho en este puerto papi: ' + port);
});

routerApi(app);
