const express = require('express');
const mongoose = require('mongoose');
const dataRouter = require('./routes/data');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/dashboard_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(Server running on port ${PORT}));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use('/api/data', dataRouter);
