// const express = require('express');
// const app = express();
// const port = 3000;
// const bodyParser = require('body-parser');
// const { User } = require('./models/User');
// // mongodb+srv://jaesoek:<password>@cluster0.qwtf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// //application/x-www-form-urlencoded 파싱
// app.use(express.urlencoded({ extended: true }));
// //application/json 파싱
// app.use(express.json());

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://jaesoek:1234@cluster0.qwtf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err))

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// //회원 가입에 필요한 정보를 client에서 가져와서 db에 넣어준다.
// app.post('/register', (req, res) => {

//   const user = new User(req.body)

//   user.save((err, userInfo) => {
//     if (err) return res.json({ success: false, err })
//     return res.status(200).json({     //status(200): 성공
//       success: true
//     })
//   })
// })

// app.listen(port, () => console.log('server on..'))

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000;
const { User } = require("./models/User");
const config = require("./config/key")

//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));

//application/json 
app.use(express.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!!!~~ '))


app.post('/register', (req, res) => {

  //회원 가입 할떄 필요한 정보들을  client에서 가져오면 
  //그것들을  데이터 베이스에 넣어준다. 
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log('server on..'))