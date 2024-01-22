import express from 'express';
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.post('/submit',(req,res)=>{
   console.log(res.body);
})

app.listen(PORT,()=>{
    console.log(`server is Listening at ${PORT}`);
})