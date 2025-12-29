import app from './src/app.js';
import express from 'express';
import dotenv from 'dotenv';
import router from './src/routes/ai.routes.js';
dotenv.config();


app.use(express.json());
app.use('/ai',router)



app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
}   )