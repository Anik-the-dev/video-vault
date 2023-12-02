import express from 'express';
import dotenv from 'dotenv'

dotenv.config({path: '../.env'});
const cl = (val: any) => console.log(val);
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send("Heloo, Welcome!");
})

app.listen(port, () =>{
 cl(`server running at http://localhost:${port}`)
})