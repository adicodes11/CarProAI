import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;

// Connect to MongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})