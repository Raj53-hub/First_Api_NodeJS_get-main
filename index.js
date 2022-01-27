var express = require('express')
var mongoose = require('mongoose')
const port = process.env.PORT || 3338;
mongoose.connect('mongodb+srv://yash:yash2002@cluster0.xvwbv.mongodb.net/movies?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('DB Connected');
    
    var app = express();
    app.listen(port,()=>{
        console.log("Server Started 3000")
    })
}).catch((e)=>{
    console.log("DB Not Connected")
})
