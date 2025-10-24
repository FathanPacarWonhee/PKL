import dotenv from 'dotenv';
dotenv.config({ path: new URL('./.env', import.meta.url).pathname });

import express from 'express';
const app = express();
app.use(express.json());

import * as ChatGptController from './controller/chatGpt.controller.js';

import cors from 'cors';
app.use(cors({
    origin: '*'
}));

app.post('/ask-to-chat-gpt', ChatGptController.askToChatGpt);

app.listen(3000, () => console.log('Server running on port 3000'));
