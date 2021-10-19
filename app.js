const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');
const pageRoute = require('./routes/pageRoute');
const photoRoute = require('./routes/photoRoute');
const app = express();

//Connect MONGODB
mongoose.connect('mongodb+srv://candan:mEvnnlCtWi7rn8DS@cluster0.onklf.mongodb.net/agency-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('DB Connected Successfully')
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.use('/', pageRoute);
app.use('/photos', photoRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log("bağlandı");
})