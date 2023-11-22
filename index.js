import "dotenv/config.js";
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoute from './routes/authRoute.js';
import registrationRoute from "./routes/registrationRoute.js";
const port = 3000;
const url = process.env.dbUrl;

//Routes 
const app = express();



//middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// mongoose
mongoose
    .connect(url)
    .then(() => console.log("db connected"))
    .catch((e) => console.log(e));



app.use('/auth', authRoute);
app.use('/userRegister', registrationRoute);

app.listen(port, () => console.log("listening"))