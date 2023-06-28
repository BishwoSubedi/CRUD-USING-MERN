import express from "express";
import bodyParser from "body-parser";
// import dotenv from "dotenv";
import Connection from "./database/connect.js";
import Routes from "./routes/route.js";
import cors from 'cors';




const app = express();

// dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended:true}));

app.use('/',Routes);
const port = process.env.PORT || "8000";
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

Connection();
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
