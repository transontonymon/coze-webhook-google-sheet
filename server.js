// 📁 server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  const { phone, image } = req.body;

  if (!phone || !image) {
    return res.status(400).json({ message: 'Missing phone or image' });
  }

  try {
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; // 👈 Thay bằng link Apps Script thật
    await axios.post(scriptURL, {
      phone,
      image,
      timestamp: new Date().toISOString()
    });
    res.json({ message: '✅ Data sent to Google Sheet' });
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ message: 'Failed to send to Google Sheet' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
