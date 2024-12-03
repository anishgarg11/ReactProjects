// server.js
import express, { json } from 'express';

import { connect, Schema, model } from 'mongoose';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

// MongoDB connection
connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// Define a simple schema and model
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const User = model('User', UserSchema);

// API endpoint to handle form submission
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
