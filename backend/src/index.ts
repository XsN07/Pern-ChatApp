import express from 'express';
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

dotenv.config();



const app = express();
const port = 5000;

app.use(cookieParser());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Merhaba, Dünya!');
});

app.use('/api/auth', authRoutes);
app.use("/api/messages",messageRoutes)

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
