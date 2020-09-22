const express = require('express');

const app = express();
const cors = require('cors');
const boom = require('express-boom');

const port = process.env.PORT || 3000;
require('./src/globals')();

app.use(boom());
app.use(cors());
// Express BodyParser
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', true);

const routers = require('./src/interfaces/http/routers');

app.use('/', routers);

app.get('/health-check', (req, res) => {
  try {
    return res.status(200).json({
      error: false,
      status: 200,
      response: 'API sucessfull started',
    });
  } catch (error) {
    console.log(error);
    return res.boom.badImplementation(`Internal Server Error`, { error: true });
  }
});

app.listen(port, () => console.log(`API listening PORT: ${port}...`));
