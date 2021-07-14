const express = require('express');
const app = express();
const port = 3000;

// mongodb+srv://jaesoek:<password>@cluster0.qwtf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jaesoek:1234@cluster0.qwtf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => console.log('server on..'))