import express from 'express';

// import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDb from "./src/config/mongo.config.js";
// import urlSchema from "./src/models/short_url.model.js";
import short_url from "./src/routes/short_url.route.js"
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';

const app = express();
app.use(cors()); // CORS middleware to allow cross-origin requests

dotenv.config("./.env"); //env ka path bata rha hai


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/create",short_url)

app.get("/:id",redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000,()=>{
    connectDb();
    console.log("Server is running on port 3000");
})


// GET - rEDIRECTION
// POST - create short url

