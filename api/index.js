import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://sahand:sahand@mern-estatec.hjbi9hl.mongodb.net/?retryWrites=true&w=majority&appName=mern-estatec")
.then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000,()=>{
    console.log('server at port 3000');
}
);