// backend/server.js
const express = require('express');
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // để frontend gọi đúng vào localhost:3000

app.use(cors());
app.use(bodyParser.json());

app.post('/ask-ai', (req, res) => {
  const { message } = req.body;
  console.log('Tin nhắn từ frontend:', message);

  // Ở đây bạn gọi OpenAI hoặc phản hồi giả lập
  res.json({ reply: "Tôi là AI, bạn cần gì?" });
});


app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
