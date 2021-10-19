const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("naber")
});

app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log("bağlandı");
})