const express = require('express');
const router = require('./routers/index');
const rescue = require('express-rescue');
const helmet = require("helmet");
const morgan = require("morgan");
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/persons', rescue(router.personsRouter))
app.use(errorMiddleware)

const port = process.env.APP_PORT || 5003
app.listen(port, () => {
  console.log(`Running on ${port}`);
});

module.exports = app;
