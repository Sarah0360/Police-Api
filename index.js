import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";

const app =express();

// const connectionString = process.env.Mongo_url;

// This was placed in the db.js
// mongoose.connect(connectionString).then(() =>{
//     console.log('Database is connected')
// });



dbConnection();

app.use(express.json());
app.use(statementRouter);


app.listen (3000, ()=> {
    console.log('App listening on port 3000')
});

