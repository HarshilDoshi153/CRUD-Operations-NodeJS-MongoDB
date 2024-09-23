const express = require('express');
const userRouter = require('./routes/user.js');
const { connectToDB } = require('./dbcred.js');

const app = express();

connectToDB('mongodb://127.0.0.1:27017/Harshil-1');
app.use(express.urlencoded({ extended: false }));


//Middleware
// app.use((req, res, next)=>{
//     console.log("Hello From middleware 1");
//     next();
// })

app.use('/api/users', userRouter);

app.listen(8000, (req, res) => {
    console.log("Server Started");
})