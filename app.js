// Environnement variables
require('dotenv').config();
// Database connection 
require('./config/db');

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');


//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy: { policy: "same-site"}
}));

//Middleware to limit the amount of request done
const limiter = rateLimit({
  window: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

//Routes
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;