import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pkg from '@prisma/client';
const { PrismaClient } = pkg;


const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('API is working 🎉');
});

// Example: Create a user
app.post('/users', async (req, res) => {
  console.log(req.body)
  try {
    const user = await prisma.user.create({
      data: req.body
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
