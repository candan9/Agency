const express = require('express');
const app = express();

//Connect MONGODB
mongoose.connect('mongodb://localhost/agency-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log('DB Connected Successfully')
});


app.get('/', (req,res)=>{
    res.send("naber")
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log("bağlandı");
})