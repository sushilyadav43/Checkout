const mongoose = require('mongoose');
const express= require('express');
const dotenv =require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
const DB = 'mongodb+srv://admin:admin@cluster0.e8wsz.mongodb.net/checkout?retryWrites=true&w=majority'

app.use(cors());
app.use(express.json());
mongoose.connect(DB, 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
})



.then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection to mongodb`));

app.use(express.static('public'))

app.use("/", require("./routes/checkoutRoute"));
app.use("/", require("./bankroutes/bankRoute"));



// dotenv.config({path:'config.env'})
const PORT = 8000;

app.get('/',(req,res)=>{
res.send(`hello`);
});

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});